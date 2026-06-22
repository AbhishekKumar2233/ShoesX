import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-green-600 font-bold">
        Order Successful 🎉
      </h1>

      <Link href="/products" className="mt-6 text-blue-500">
        Continue Shopping
      </Link>
    </main>
  );
}