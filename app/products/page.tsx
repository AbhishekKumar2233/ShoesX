"use client";

import { products } from "../products";
import { motion } from "framer-motion";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams?.category;

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* HEADER */}
      <div>
        <h1 className="text-5xl font-black">
          {category ? `${category} Shoes` : "All Shoes"}
        </h1>

        <p className="text-zinc-500 mt-2">
          Premium sneakers for every lifestyle
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 mt-6 flex-wrap">
        {["All", "Running", "Lifestyle", "Sports"].map((cat) => (
          <a
            key={cat}
            href={cat === "All" ? "/products" : `/products?category=${cat}`}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              category === cat
                ? "bg-black text-white"
                : "bg-white hover:bg-zinc-100"
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group"
          >
            <a
              href={`/products/${product.id}`}
              className="
                block
                bg-white
                border
                rounded-3xl
                overflow-hidden
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200">

                {/* overlay glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/10 to-transparent" />

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* BRAND BADGE */}
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {product.brand}
                </span>

                {/* RATING */}
                <span className="absolute top-3 right-3 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full">
                  ⭐ {product.rating}
                </span>

                {/* DISCOUNT */}
                {product.discount && (
                  <span className="absolute bottom-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="font-bold text-lg group-hover:text-black transition">
                  {product.name}
                </h3>

                <p className="text-sm text-zinc-500 mt-1">
                  {product.category}
                </p>

                {/* PRICE */}
                <div className="flex justify-between items-end mt-4">

                  <div>
                    <p className="text-xl font-black">
                      ₹{product.price}
                    </p>

                    {product.originalPrice && (
                      <p className="text-xs text-zinc-400 line-through">
                        ₹{product.originalPrice}
                      </p>
                    )}
                  </div>

                  {/* ADD BUTTON */}
                  <button
                    className="
                      px-4 py-2
                      bg-black
                      text-white
                      text-sm
                      rounded-xl
                      opacity-0
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                    "
                  >
                    Add
                  </button>

                </div>

              </div>

            </a>
          </motion.div>
        ))}

      </div>

    </main>
  );
}