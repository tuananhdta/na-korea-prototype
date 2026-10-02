"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function CartFlyOverlay() {
  const { flyingItems } = useCart();

  if (flyingItems.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden select-none"
    >
      {flyingItems.map((item) => (
        <div
          key={item.id}
          className="cart-fly-particle"
          style={
            {
              "--start-x": `${item.startX - 26}px`,
              "--start-y": `${item.startY - 26}px`,
              "--target-x": `${item.targetX - 26}px`,
              "--target-y": `${item.targetY - 26}px`,
            } as React.CSSProperties
          }
        >
          <div className="cart-fly-inner">
            <div className="relative w-13 h-13 rounded-full bg-white shadow-[0_8px_24px_rgba(75,25,62,0.35)] border-2 border-[#4B193E] p-1 overflow-hidden flex items-center justify-center">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="52px"
                className="object-contain p-1"
                unoptimized
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
