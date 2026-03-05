import React from "react";

const MenuItemCard = ({ item, addToCart }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
    <img src={item.image} alt={item.name} className="w-full h-40 object-cover"/>
    <div className="p-3">
      <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-red-600 font-semibold">{item.price} EGP</span>
        <button onClick={() => addToCart(item)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg font-medium text-sm">
          🛒 Add
        </button>
      </div>
    </div>
  </div>
);

export default MenuItemCard;

