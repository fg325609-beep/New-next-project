import Link from 'next/link';
import React from 'react';
import { products } from '@/app/data/products';

export const metadata = {
  title: "Bosh sahifa",
  description:
    "Nextni — zamonaviy mahsulotlar do'koni. iPhone, Samsung, Xiaomi va boshqa brendlarning eng so'nggi modellarini toping.",
  openGraph: {
    title: "Nextni — Mahsulotlar do'koni",
    description:
      "iPhone, Samsung, Xiaomi va boshqa brendlarning eng so'nggi modellarini toping.",
  },
};

export default function HomePage() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Mahsulotlar</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="border p-2 rounded hover:bg-gray-100 transition">
            <Link href={`/product/${product.id}`} className="text-blue-600 font-semibold block">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}