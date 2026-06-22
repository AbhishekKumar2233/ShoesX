"use client";

import { useState } from "react";

export default function CartPage() {
  // dummy state (later replace with Zustand/localStorage)
  const [cart, setCart] = useState([
    {
      id: "nike-air-max-270",
      name: "Nike Air Max 270",
      price: 12999,
      qty: 1,
      image: "/shoes/nike-air-max-270/main.jpg",
    },
    {
      id: "adidas-boost",
      name: "Adidas Boost",
      price: 14999,
      qty: 2,
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    },
  ]);

  const updateQty = (id: string, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-black">Your Cart 🛒</h1>

      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        
        {/* LEFT - CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                className="w-28 h-28 object-cover rounded-xl"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h2 className="font-bold text-lg">
                  {item.name}
                </h2>

                <p className="text-gray-500">
                  ₹{item.price}
                </p>

                {/* QUANTITY */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() =>
                      updateQty(item.id, "dec")
                    }
                    className="px-3 py-1 border rounded-lg"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.qty}
                  </span>

                  <button
                    onClick={() =>
                      updateQty(item.id, "inc")
                    }
                    className="px-3 py-1 border rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col justify-between items-end">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>

                <p className="font-bold">
                  ₹{item.price * item.qty}
                </p>
              </div>
            </div>
          ))}

          {cart.length === 0 && (
            <div className="text-center py-20 border rounded-2xl">
              <p className="text-gray-500">
                Your cart is empty 🛍️
              </p>
            </div>
          )}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="h-fit sticky top-24 border rounded-2xl p-6 bg-white shadow-sm">
          <h2 className="text-xl font-bold">
            Order Summary
          </h2>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">
                Free
              </span>
            </div>

            <div className="flex justify-between font-bold text-lg pt-4 border-t">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-black text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition">
            Checkout
          </button>

          <p className="text-xs text-gray-400 mt-3 text-center">
            Secure checkout powered by ShoesX
          </p>
        </div>
      </div>
    </main>
  );
}