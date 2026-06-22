import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ShoesX",
    template: "%s | ShoesX",
  },
  description:
    "Premium footwear for running, lifestyle, sports and fashion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 antialiased">
        <div className="min-h-screen">
          {/* NAVBAR */}
          <header className="sticky top-0 z-50 px-4 py-4">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center justify-between rounded-3xl border border-zinc-200/70 bg-white/80 backdrop-blur-xl px-6 py-4 shadow-sm">
                {/* Logo */}
                <Link
                  href="/"
                  className="text-2xl font-black tracking-tight"
                >
                  ShoesX
                </Link>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                  <Link
                    href="/products"
                    className="font-medium text-zinc-600 hover:text-black transition"
                  >
                    Shop
                  </Link>

                  <Link
                    href="/products?category=Running"
                    className="font-medium text-zinc-600 hover:text-black transition"
                  >
                    Running
                  </Link>

                  <Link
                    href="/products?category=Lifestyle"
                    className="font-medium text-zinc-600 hover:text-black transition"
                  >
                    Lifestyle
                  </Link>

                  <Link
                    href="/products?gender=Men"
                    className="font-medium text-zinc-600 hover:text-black transition"
                  >
                    Men
                  </Link>

                  <Link
                    href="/products?gender=Women"
                    className="font-medium text-zinc-600 hover:text-black transition"
                  >
                    Women
                  </Link>
                </nav>

                {/* Search */}
                <div className="hidden xl:flex">
                  <input
                    type="text"
                    placeholder="Search sneakers..."
                    className="w-64 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 outline-none focus:border-black"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/wishlist"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 transition"
                  >
                    ❤️
                  </Link>

                  <Link
                    href="/cart"
                    className="relative flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 transition"
                  >
                    🛒

                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
                      2
                    </span>
                  </Link>

                  <button className="hidden md:flex rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* CONTENT */}
          <main>{children}</main>

          {/* FOOTER */}
          <footer className="mt-32 border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div>
                  <h3 className="text-2xl font-black">
                    ShoesX
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    Discover premium sneakers, running shoes,
                    and lifestyle footwear from leading brands.
                  </p>
                </div>

                {/* Shop */}
                <div>
                  <h4 className="font-semibold">
                    Shop
                  </h4>

                  <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                    <li>
                      <Link href="/products">
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=Running">
                        Running Shoes
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=Lifestyle">
                        Lifestyle Shoes
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold">
                    Brands
                  </h4>

                  <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                    <li>Nike</li>
                    <li>Adidas</li>
                    <li>Puma</li>
                    <li>ASICS</li>
                    <li>New Balance</li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div>
                  <h4 className="font-semibold">
                    Stay Updated
                  </h4>

                  <p className="mt-4 text-sm text-zinc-500">
                    Get exclusive offers and new arrivals.
                  </p>

                  <div className="mt-4 flex">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="flex-1 rounded-l-xl border border-zinc-200 px-4 py-3 outline-none"
                    />

                    <button className="rounded-r-xl bg-black px-5 text-white">
                      Join
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row md:justify-between">
                <p>
                  © {new Date().getFullYear()} ShoesX.
                  All rights reserved.
                </p>

                <div className="flex gap-6">
                  <Link href="/privacy">
                    Privacy
                  </Link>

                  <Link href="/terms">
                    Terms
                  </Link>

                  <Link href="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}