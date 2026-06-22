"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { products } from "./products";
import { useFetch } from "@/hooks/fetchHook";
type Product = {
  id: number;
  title: string;
  price: number;
};
type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
export default function HomePage() {
  const { data, loading, error } =    useFetch<ProductResponse>('https://dummyjson.com/products/search?q=shoe');
console.log(data?.products,"data78")
  const products = data?.products || [];
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Blob */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex rounded-full border px-4 py-2 text-sm"
          >
            ✨ New Collection 2026
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="mt-8 text-7xl md:text-9xl font-black tracking-tight"
          >
            MOVE
            <br />
            DIFFERENT
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-8 max-w-2xl text-xl text-zinc-500"
          >
            Discover premium footwear designed for
            performance, comfort and style.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="mt-10 flex gap-4"
          >
            <Link
              href="/products"
              className="rounded-full bg-black px-8 py-4 text-white"
            >
              Shop Collection
            </Link>

            <Link
              href="/products"
              className="rounded-full border px-8 py-4"
            >
              Explore
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-black"
        >
          Shop By Style
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            "Running",
            "Lifestyle",
            "Training",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-[32px] border bg-white p-10 shadow-sm cursor-pointer"
            >
              <h3 className="text-3xl font-bold">
                {item}
              </h3>

              <p className="mt-4 text-zinc-500">
                Premium {item.toLowerCase()} collection.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-zinc-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="text-5xl font-black"
          >
            Featured Products
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                }}
              >
                <Link
                  href={`/products/${product.id}`}
                  className="group block overflow-hidden rounded-[32px] border bg-white"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      src={product.thumbnail}
                      alt={product.name}
                      className="h-72 w-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-zinc-500">
                      {product.brand}
                    </p>

                    <h3 className="font-semibold mt-1">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex justify-between">
                      <span className="font-bold">
                        ₹{product.price}
                      </span>

                      <span>
                        ⭐ {product.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="rounded-[48px] bg-black text-white text-center py-24">
            <h2 className="text-6xl font-black">
              YOUR NEXT
              <br />
              FAVORITE PAIR
            </h2>

            <p className="mt-6 text-zinc-300">
              Premium comfort meets modern design.
            </p>

            <Link
              href="/products"
              className="inline-flex mt-8 rounded-full bg-white px-8 py-4 text-black font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}