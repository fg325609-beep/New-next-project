import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: "Biz haqimizda",
  description:
    "Nextni — zamonaviy mahsulotlar do'koni. Biz haqimizda batafsil ma'lumot.",
  openGraph: {
    title: "Biz haqimizda | Nextni",
    description:
      "Nextni — zamonaviy mahsulotlar do'koni. Biz haqimizda batafsil ma'lumot.",
  },
};

export default function AbautPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Biz haqimizda</h1>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Nextni — bu zamonaviy texnologiyalar va sifatli mahsulotlarni bir joyga
        jamlagan onlayn do'kon. Biz mijozlarimizga eng so'nggi smartfonlar,
        gadjetlar va aksessuarlarni taqdim etamiz.
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Bizning maqsadimiz — har bir mijozga eng yaxshi xizmat ko'rsatish va
        sifatli mahsulotlarni arzon narxlarda yetkazib berish.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}