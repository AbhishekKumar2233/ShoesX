// 'use client'
// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// type ProductResponse = {
//   products: Product[];
//   total: number;
//   skip: number;
//   limit: number;
// };

// import { useFetch } from "@/hooks/fetchHook";

// export default function products() {
//   const { data, loading, error } =
//     useFetch<ProductResponse>('https://dummyjson.com/products/search?q=shoe');

//   const product = loading || error ? [] : data?.products ?? [];
// console.log(product,"fhdhproduct")
//   return product
// }
export const products = [
  {
    id: "nike-air-max-270",
    sku: "NK-AM270-001",

    name: "Nike Air Max 270",
    brand: "Nike",

    category: "Running",
    gender: "Men",

    price: 12999,
    originalPrice: 14999,
    discount: 13,

    stock: 25,

    rating: 4.8,
    reviews: 1245,

    colors: ["Black", "White", "Red"],
    sizes: [6, 7, 8, 9, 10, 11],

    image: "/shoes/nike-air-max-270/main.jpg",

    images: [
      "/shoes/nike-air-max-270/main.jpg",
      "/shoes/nike-air-max-270/side.jpg",
      "/shoes/nike-air-max-270/back.jpg",
      "/shoes/nike-air-max-270/top.jpg",
    ],

    description:
      "Nike Air Max 270 delivers all-day comfort with responsive cushioning and a lightweight breathable upper.",

    features: [
      "Air Max cushioning",
      "Breathable mesh upper",
      "Rubber outsole",
      "Lightweight design",
    ],

    tags: ["running", "sports", "best seller", "new arrival"],
  },

  {
    id: "adidas-ultraboost-light",
    sku: "AD-UBL-002",

    name: "Adidas Ultraboost Light",
    brand: "Adidas",

    category: "Running",
    gender: "Men",

    price: 14999,
    originalPrice: 16999,
    discount: 12,

    stock: 18,

    rating: 4.9,
    reviews: 978,

    colors: ["White", "Blue", "Black"],
    sizes: [7, 8, 9, 10, 11],

    image: "/shoes/adidas-ultraboost/main.jpg",

    images: [
      "/shoes/adidas-ultraboost/main.jpg",
      "/shoes/adidas-ultraboost/side.jpg",
      "/shoes/adidas-ultraboost/back.jpg",
    ],

    description:
      "Energy-returning BOOST midsole with premium knit upper for maximum comfort.",

    features: [
      "BOOST cushioning",
      "Primeknit upper",
      "Stretch web outsole",
      "Responsive ride",
    ],

    tags: ["running", "premium", "comfort"],
  },

  {
    id: "puma-rs-x",
    sku: "PM-RSX-003",

    name: "Puma RS-X",
    brand: "Puma",

    category: "Lifestyle",
    gender: "Unisex",

    price: 9999,
    originalPrice: 11999,
    discount: 17,

    stock: 30,

    rating: 4.6,
    reviews: 634,

    colors: ["White", "Orange", "Grey"],
    sizes: [6, 7, 8, 9, 10],

    image: "/shoes/puma-rsx/main.jpg",

    images: [
      "/shoes/puma-rsx/main.jpg",
      "/shoes/puma-rsx/side.jpg",
      "/shoes/puma-rsx/back.jpg",
    ],

    description:
      "Bold retro-inspired sneaker with comfortable cushioning and premium materials.",

    features: [
      "Retro design",
      "Soft foam midsole",
      "Durable outsole",
      "All-day comfort",
    ],

    tags: ["casual", "streetwear", "trending"],
  },

  {
    id: "new-balance-550",
    sku: "NB-550-004",

    name: "New Balance 550",
    brand: "New Balance",

    category: "Lifestyle",
    gender: "Unisex",

    price: 11999,
    originalPrice: 13999,
    discount: 14,

    stock: 15,

    rating: 4.7,
    reviews: 812,

    colors: ["White", "Green"],
    sizes: [6, 7, 8, 9, 10, 11],

    image: "/shoes/nb-550/main.jpg",

    images: [
      "/shoes/nb-550/main.jpg",
      "/shoes/nb-550/side.jpg",
      "/shoes/nb-550/back.jpg",
    ],

    description:
      "Classic basketball-inspired silhouette with premium leather construction.",

    features: [
      "Leather upper",
      "Basketball heritage",
      "Premium finish",
      "Comfort fit",
    ],

    tags: ["retro", "basketball", "popular"],
  },

  {
    id: "asics-gel-kayano-30",
    sku: "AS-GK30-005",

    name: "ASICS Gel Kayano 30",
    brand: "ASICS",

    category: "Running",
    gender: "Women",

    price: 15999,
    originalPrice: 17999,
    discount: 11,

    stock: 20,

    rating: 4.9,
    reviews: 542,

    colors: ["Pink", "White", "Purple"],
    sizes: [5, 6, 7, 8, 9],

    image: "/shoes/asics-kayano/main.jpg",

    images: [
      "/shoes/asics-kayano/main.jpg",
      "/shoes/asics-kayano/side.jpg",
      "/shoes/asics-kayano/back.jpg",
    ],

    description:
      "Premium stability running shoe designed for long-distance comfort and support.",

    features: [
      "GEL cushioning",
      "Stability support",
      "Lightweight foam",
      "Long-distance comfort",
    ],

    tags: ["running", "women", "premium"],
  },
];