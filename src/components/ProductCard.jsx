"use client";

import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/app/cart/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ p }) => {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    const openTimer = setTimeout(() => {
      setShowModal(true);

  
      const closeTimer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => clearTimeout(closeTimer);
    }, []);

    return () => clearTimeout(openTimer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

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
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">Follow Us on Social Media!</h2>
            <p className="text-gray-600 mt-2">Stay connected with us.</p>
            <a href="#" className="text-blue-500 text-xl">
              🔴 Instagram
            </a>
            <a href="#" className="text-red-500 text-xl">
              🔴 YouTube
            </a>
            <a href="#" className="text-blue-400 text-xl">
              🔷 Telegram
            </a>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded block mx-auto cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
