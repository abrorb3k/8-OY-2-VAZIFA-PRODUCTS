"use client";

import React from "react";
import { useCart } from "./CartContext";
import Image from "next/image";
import { Trash } from "lucide-react";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart
    .reduce(
      (acc, item) =>
        acc + (item.price - (item.price / 100) * item.discountPercentage),
      0
    )
    .toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Savat bo‘sh 🛍</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg shadow-md"
            >
              <div className="w-24 h-24 relative">
                <Image
                  src={item.images[0]}
                  className="rounded-md object-cover"
                  layout="fill"
                  alt={item.title}
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-500">💰 ${item.price}</p>
                <p className="text-green-500 font-bold">
                  $
                  {(
                    item.price -
                    (item.price / 100) * item.discountPercentage
                  ).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-700 cursor-pointer hover:scale-125 duration-300"
              >
                <Trash size={20} />
              </button>
            </div>
          ))}

          <div className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
            <h3 className="text-xl font-bold">Umumiy:</h3>
            <p className="text-2xl font-bold text-green-600">${totalPrice}</p>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-800 transition cursor-pointer">
            🛍 Xarid qilish
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
