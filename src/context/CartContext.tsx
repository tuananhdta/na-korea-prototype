"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types/product";

interface CartContextType {
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

function parsePriceToNumber(priceStr: string): number {
  if (!priceStr) return 0;
  // Strip out "₫", ".", " ", ","
  const clean = priceStr.replace(/[^0-9]/g, "");
  return parseInt(clean, 10) || 0;
}

function formatNumberToVnd(num: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(num);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("kims_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart from storage", e);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("kims_cart", JSON.stringify(items));
      } catch (e) {
        console.error("Failed to persist cart", e);
      }
    }
  }, [items, mounted]);

  const addToCart = (product: Product, quantity = 1, option?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        if (option) next[existingIndex].selectedOption = option;
        return next;
      }
      return [...prev, { product, quantity, selectedOption: option }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

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
