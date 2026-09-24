"use client";

import React, { createContext, useContext, useState, useCallback, useSyncExternalStore } from "react";
import { Product, CartItem } from "@/types/product";

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, option?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  totalCount: number;
  totalPrice: number;
  formattedTotalPrice: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "kims_cart";
const EMPTY_ITEMS_STR = "[]";

let cachedCartStr = EMPTY_ITEMS_STR;
let cachedCartItems: CartItem[] = [];

const EMPTY_CART_ARRAY: CartItem[] = [];

function getCartSnapshot(): CartItem[] {
  if (typeof window === "undefined") return EMPTY_CART_ARRAY;
  const currentStr = localStorage.getItem(CART_KEY) || EMPTY_ITEMS_STR;
  if (currentStr !== cachedCartStr) {
    try {
      cachedCartItems = JSON.parse(currentStr);
      cachedCartStr = currentStr;
    } catch {
      cachedCartItems = EMPTY_CART_ARRAY;
      cachedCartStr = EMPTY_ITEMS_STR;
    }
  }
  return cachedCartItems;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY_CART_ARRAY;
}

function subscribeToStorage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener("kims_cart_update", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("kims_cart_update", handler);
  };
}

function writeCartToStorage(items: CartItem[]) {
  if (typeof window === "undefined") return;
  const str = JSON.stringify(items);
  cachedCartStr = str;
  cachedCartItems = items;
  localStorage.setItem(CART_KEY, str);
  window.dispatchEvent(new Event("kims_cart_update"));
}

export function parsePriceToNumber(priceStr: string): number {
  if (!priceStr) return 0;
  const clean = priceStr.replace(/[^0-9]/g, "");
  return parseInt(clean, 10) || 0;
}

export function formatNumberToVnd(num: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(num);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribeToStorage, getCartSnapshot, getServerSnapshot);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product, quantity = 1, option?: string) => {
    const currentItems = getCartSnapshot();
    const existingIndex = currentItems.findIndex(
      (item) => item.product.id === product.id && item.selectedOption === option
    );
    let next: CartItem[];
    if (existingIndex > -1) {
      next = [...currentItems];
      next[existingIndex] = {
        ...next[existingIndex],
        quantity: next[existingIndex].quantity + quantity,
      };
    } else {
      next = [...currentItems, { product, quantity, selectedOption: option }];
    }
    writeCartToStorage(next);
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    const currentItems = getCartSnapshot();
    const next = currentItems.filter((item) => item.product.id !== productId);
    writeCartToStorage(next);
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    const currentItems = getCartSnapshot();
    if (quantity <= 0) {
      const next = currentItems.filter((item) => item.product.id !== productId);
      writeCartToStorage(next);
      return;
    }
    const next = currentItems.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    writeCartToStorage(next);
  }, []);

  const clearCart = useCallback(() => {
    writeCartToStorage([]);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = items.reduce((acc, item) => {
    const itemPrice = parsePriceToNumber(item.product.price);
    return acc + itemPrice * item.quantity;
  }, 0);

  const formattedTotalPrice = formatNumberToVnd(totalPrice);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        totalCount,
        totalPrice,
        formattedTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

