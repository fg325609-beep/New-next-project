'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { products } from "@/app/data/products";

export default function ProductDetailPage() {
    const { id } = useParams();

    const product = products.find( ( p ) => p.id === id );

    if ( !product ) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded">
                Kechirasiz, bunday mahsulot topilmadi!
            </div>
        );
    }

    return (
        <div className="p-6 bg-white rounded shadow-md border max-w-md">
            <h1 className="text-xl font-bold mb-2">ID: { product.id }</h1>
            <p className="text-gray-700 mb-1">Nomi: <span className="font-semibold">{ product.name }</span></p>
            <p className="text-green-600 font-bold">Narxi: { product.price }</p>
        </div>
    );
}