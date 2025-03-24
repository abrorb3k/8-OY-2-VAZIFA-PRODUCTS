"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useCart } from "@/app/cart/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const ProductCard = ({ p }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(p);
    toast.success("Mahsulot savatga qo‘shildi! ✅", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="p-3 pb-10 relative shadow rounded">
      <span className="absolute top-2 right-2 cursor-pointer hover:scale-110">
        <Heart />
      </span>
      <div className="w-full aspect-square">
        <Image
          src={p.images[0]}
          className="w-full h-full object-contain"
          width={300}
          height={200}
          alt={p.title}
        />
      </div>
      <p className="line-clamp-2 mb-4">{p.title}</p>
      <div className="flex absolute bottom-0 right-0 pb-3 p-[inherit] w-full justify-between items-end gap-1">
        <div>
          <p className="opacity-50 line-through text-sm">${p.price}</p>
          <h4 className="leading-4">
            ${(p.price - (p.price / 100) * p.discountPercentage).toFixed(2)}
          </h4>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex items-center cursor-pointer gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <ShoppingCart size={16} />
          <span className="hidden sm:inline">Savatga</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
