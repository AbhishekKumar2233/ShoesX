import { products } from "../../products";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid lg:grid-cols-2 gap-12">

        {/* LEFT - IMAGES */}
        <div>

          {/* MAIN IMAGE */}
          <div className="bg-white border rounded-3xl p-6 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[480px] object-cover rounded-2xl"
            />
          </div>

          {/* GALLERY */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-24 h-24 object-cover rounded-xl border hover:scale-105 transition"
              />
            ))}
          </div>

          {/* TAGS */}
          <div className="flex gap-2 mt-5 flex-wrap">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-zinc-100 px-3 py-1 rounded-full text-zinc-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div>

          {/* BRAND + BADGES */}
          <div className="flex flex-wrap items-center gap-3">

            <span className="text-xs bg-zinc-100 px-3 py-1 rounded-full">
              {product.brand}
            </span>

            <span className="text-xs text-amber-600 font-semibold">
              ⭐ {product.rating} ({product.reviews} reviews)
            </span>

            <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
              SKU: {product.sku}
            </span>

            {product.discount > 0 && (
              <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">
                -{product.discount}% OFF
              </span>
            )}
          </div>

          {/* NAME */}
          <h1 className="text-4xl font-black mt-4">
            {product.name}
          </h1>

          {/* CATEGORY + GENDER */}
          <p className="text-zinc-500 mt-1">
            {product.category} • {product.gender}
          </p>

          {/* PRICE */}
          <div className="mt-6 flex items-end gap-3">
            <p className="text-3xl font-black">
              ₹{product.price}
            </p>

            <p className="text-zinc-400 line-through">
              ₹{product.originalPrice}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-zinc-600 leading-relaxed">
            {product.description}
          </p>

          {/* COLORS */}
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Available Colors</h3>

            <div className="flex gap-3 flex-wrap">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* SIZES */}
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Select Size</h3>

            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-xl hover:bg-black hover:text-white transition"
                >
                  UK {size}
                </button>
              ))}
            </div>
          </div>

          {/* STOCK */}
          <p className="mt-6 text-sm font-medium text-green-600">
            In Stock ({product.stock} items available)
          </p>

          {/* FEATURES */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Key Features</h3>

            <ul className="space-y-1 text-sm text-zinc-600 list-disc ml-5">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-10 space-y-3">

            <button className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition">
              Add to Cart
            </button>

            <button className="w-full border py-4 rounded-2xl font-semibold hover:bg-zinc-100 transition">
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}