"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useSyncExternalStore,
  useEffect,
  useRef,
} from "react";
import { Product, CartItem } from "@/types/product";

export interface FlyingItem {
  id: string;
  image: string;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
}

export interface AddedNotification {
  isOpen: boolean;
  product: Product;
  quantity: number;
  option?: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity?: number,
    option?: string,
    eventOrSource?: React.MouseEvent | HTMLElement | { x: number; y: number } | null
  ) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  totalCount: number;
  totalPrice: number;
  formattedTotalPrice: string;
  // Shake & Badge Pop
  isCartShaking: boolean;
  isBadgePopping: boolean;
  triggerCartShake: () => void;
  // Flying items for parabolic animation
  flyingItems: FlyingItem[];
  // Top-right notification popup
  notification: AddedNotification | null;
  dismissNotification: () => void;
  // Item Selection in Cart Drawer
  selectedItemIds: string[];
  toggleSelectItem: (productId: string) => void;
  toggleSelectAll: (selectAll?: boolean) => void;
  isAllSelected: boolean;
  selectedCount: number;
  selectedTotalPrice: number;
  formattedSelectedTotalPrice: string;
  savingsTotalPrice: number;
  formattedSavingsTotalPrice: string;
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

export function parsePriceToNumber(priceStr?: string | null): number {
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
  const [isCartShaking, setIsCartShaking] = useState(false);
  const [isBadgePopping, setIsBadgePopping] = useState(false);
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);
  const [notification, setNotification] = useState<AddedNotification | null>(null);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);
  const shakeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize selectedItemIds whenever items array changes
  useEffect(() => {
    setSelectedItemIds((prev) => {
      const validIds = new Set(items.map((i) => i.product.id));
      // Keep existing selected that are still valid, plus any newly added items
      const updated = prev.filter((id) => validIds.has(id));
      for (const item of items) {
        if (!prev.includes(item.product.id) && !updated.includes(item.product.id)) {
          updated.push(item.product.id);
        }
      }
      return updated;
    });
  }, [items]);

  const triggerCartShake = useCallback(() => {
    setIsCartShaking(true);
    setIsBadgePopping(true);

    if (shakeTimerRef.current) {
      clearTimeout(shakeTimerRef.current);
    }
    shakeTimerRef.current = setTimeout(() => {
      setIsCartShaking(false);
      setIsBadgePopping(false);
    }, 700);
  }, []);

  const dismissNotification = useCallback(() => {
    setNotification(null);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  }, []);

  const addToCart = useCallback(
    (
      product: Product,
      quantity = 1,
      option?: string,
      eventOrSource?: React.MouseEvent | HTMLElement | { x: number; y: number } | null
    ) => {
      // 1. Calculate Start and Target coordinates for flying particle
      let startX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
      let startY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

      if (eventOrSource) {
        if ("clientX" in eventOrSource && "clientY" in eventOrSource) {
          startX = eventOrSource.clientX;
          startY = eventOrSource.clientY;
        } else if ("getBoundingClientRect" in (eventOrSource as HTMLElement)) {
          const rect = (eventOrSource as HTMLElement).getBoundingClientRect();
          startX = rect.left + rect.width / 2;
          startY = rect.top + rect.height / 2;
        } else if ("x" in eventOrSource && "y" in eventOrSource) {
          startX = eventOrSource.x;
          startY = eventOrSource.y;
        }
      }

      let targetX = typeof window !== "undefined" ? window.innerWidth - 60 : 0;
      let targetY = 40;

      if (typeof document !== "undefined") {
        const cartIcons = document.querySelectorAll(
          "[data-cart-icon='true'], #header-cart-icon, #header-mobile-cart-icon"
        );
        for (const el of Array.from(cartIcons)) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            targetX = rect.left + rect.width / 2;
            targetY = rect.top + rect.height / 2;
            break;
          }
        }
      }

      // 2. Launch flying particle
      const flightId = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      setFlyingItems((prev) => [
        ...prev,
        {
          id: flightId,
          image: product.image,
          startX,
          startY,
          targetX,
          targetY,
        },
      ]);

      // 3. When flying particle arrives at Header Cart Icon (~520ms):
      setTimeout(() => {
        // Update Cart Storage
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

        // Ensure new item is selected
        setSelectedItemIds((prev) => (prev.includes(product.id) ? prev : [...prev, product.id]));

        // Shake Header Cart Icon & Pop Badge Count
        triggerCartShake();

        // Show Top-Right Notification Popup
        setNotification({
          isOpen: true,
          product,
          quantity,
          option,
        });

        if (toastTimerRef.current) {
          clearTimeout(toastTimerRef.current);
        }
        toastTimerRef.current = setTimeout(() => {
          setNotification(null);
        }, 3000);
      }, 520);

      // 4. Remove flying particle after animation finishes (~620ms)
      setTimeout(() => {
        setFlyingItems((prev) => prev.filter((item) => item.id !== flightId));
      }, 620);
    },
    [triggerCartShake]
  );

  const removeFromCart = useCallback((productId: string) => {
    const currentItems = getCartSnapshot();
    const next = currentItems.filter((item) => item.product.id !== productId);
    writeCartToStorage(next);
    setSelectedItemIds((prev) => prev.filter((id) => id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    const currentItems = getCartSnapshot();
    if (quantity <= 0) {
      const next = currentItems.filter((item) => item.product.id !== productId);
      writeCartToStorage(next);
      setSelectedItemIds((prev) => prev.filter((id) => id !== productId));
      return;
    }
    const next = currentItems.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    writeCartToStorage(next);
  }, []);

  const clearCart = useCallback(() => {
    writeCartToStorage([]);
    setSelectedItemIds([]);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  // Selection handlers
  const toggleSelectItem = useCallback((productId: string) => {
    setSelectedItemIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }, []);

  const toggleSelectAll = useCallback(
    (selectAll?: boolean) => {
      if (selectAll !== undefined) {
        if (selectAll) {
          setSelectedItemIds(items.map((i) => i.product.id));
        } else {
          setSelectedItemIds([]);
        }
      } else {
        // Toggle current state
        if (selectedItemIds.length === items.length && items.length > 0) {
          setSelectedItemIds([]);
        } else {
          setSelectedItemIds(items.map((i) => i.product.id));
        }
      }
    },
    [items, selectedItemIds]
  );

  const isAllSelected = items.length > 0 && selectedItemIds.length === items.length;

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = items.reduce((acc, item) => {
    const itemPrice = parsePriceToNumber(item.product.price);
    return acc + itemPrice * item.quantity;
  }, 0);

  const formattedTotalPrice = formatNumberToVnd(totalPrice);

  // Selected items calculations
  const selectedItems = items.filter((item) => selectedItemIds.includes(item.product.id));

  const selectedCount = selectedItems.reduce((acc, item) => acc + item.quantity, 0);

  const selectedTotalPrice = selectedItems.reduce((acc, item) => {
    const itemPrice = parsePriceToNumber(item.product.price);
    return acc + itemPrice * item.quantity;
  }, 0);

  const formattedSelectedTotalPrice = formatNumberToVnd(selectedTotalPrice);

  // Savings calculation (Original price - Current price)
  const savingsTotalPrice = selectedItems.reduce((acc, item) => {
    const orig = parsePriceToNumber(item.product.originalPrice);
    const curr = parsePriceToNumber(item.product.price);
    if (orig > curr) {
      return acc + (orig - curr) * item.quantity;
    }
    return acc;
  }, 0);

  const formattedSavingsTotalPrice = formatNumberToVnd(savingsTotalPrice);

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
        isCartShaking,
        isBadgePopping,
        triggerCartShake,
        flyingItems,
        notification,
        dismissNotification,
        selectedItemIds,
        toggleSelectItem,
        toggleSelectAll,
        isAllSelected,
        selectedCount,
        selectedTotalPrice,
        formattedSelectedTotalPrice,
        savingsTotalPrice,
        formattedSavingsTotalPrice,
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
