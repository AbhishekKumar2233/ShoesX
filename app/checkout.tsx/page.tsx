"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const total = 25998; // dummy total (replace from cart later)

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      
      <h1 className="text-5xl font-black">
        Checkout
      </h1>

      <p className="text-zinc-500 mt-2">
        Complete your order in a few steps
      </p>

      <div className="grid lg:grid-cols-3 gap-10 mt-10">

        {/* LEFT - FORM */}
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-3xl p-8 shadow-sm">

            <h2 className="text-xl font-bold mb-6">
              Shipping Details
            </h2>

            <div className="space-y-5">

              {/* NAME */}
              <input
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black transition"
              />

              {/* ADDRESS */}
              <input
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
                placeholder="Full Address"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black transition"
              />

              {/* PHONE */}
              <input
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black transition"
              />

              <button
                className="
                  w-full
                  bg-black
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  mt-6
                  hover:scale-[1.02]
                  transition
                "
              >
                Pay Now
              </button>

              <p className="text-xs text-zinc-400 text-center">
                Secure payment powered by ShoesX
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border rounded-3xl p-6 shadow-sm">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Subtotal
                </span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">
                  Shipping
                </span>
                <span className="text-green-600">
                  Free
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-500">
              ⚡ Your order will be delivered in 3–5 days
              with free shipping and easy returns.
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}