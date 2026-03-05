// src/components/MenuItemCard.jsx
import React from "react";

const MenuItemCard = ({ item, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* صورة */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      {/* التفاصيل */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-red-600">
            ${item.price}
          </span>
          <button
            onClick={() => addToCart(item)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
          >
            Add 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
