import React, { useState, useContext, useEffect } from "react";
import MenuItemCard from "../components/MenuCart";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [menuData, setMenuData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch البيانات من JSON Server
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then(res => res.json())
      .then(data => {
        setMenuData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching menu:", err);
        setLoading(false);
      });
  }, []);

  const filteredMenu = menuData.filter(
    item =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["All", "Beef", "Chicken", "Fish", "Hot", "Drinks", "Deals"];

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const filterContainerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.9, delayChildren: 0.3 },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full min-h-screen flex flex-col px-6 md:px-12 pt-[12rem]">
      {/* العنوان */}
      <motion.h2 
        className="text-3xl font-bold text-red-600 mb-6 text-center"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Wahmy Burger Menu
      </motion.h2>

      {/* الفلاتر */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-6"
        variants={filterContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map(cat => (
          <motion.button
            key={cat}
            variants={filterVariants}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              category === cat
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* البحث */}
      <div className="flex justify-center mb-6">
        <motion.input
          type="text"
          placeholder="🔍 ابحث..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border rounded-lg shadow text-black focus:outline-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* عرض الكروت */}
      <motion.div
        key={category + search}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredMenu.map(item => (
          <motion.div
            className="flex justify-center"
            key={item.id}
            variants={cardVariants}
          whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className="w-full max-w-xs">
              <MenuItemCard item={item} addToCart={addToCart} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* رسالة لو مفيش منتجات */}
      {filteredMenu.length === 0 && (
        <motion.p
          className="text-center text-gray-500 mt-6"
          initial={{ x: -10 }}
          animate={{ x: [ -10, 10, -10, 10, 0 ] }}
          transition={{ duration: 0.8 }}
        >
          ❌ مفيش برجر أو مشروب بالاسم ده
        </motion.p>
      )}
    </div>
  );
};

export default Menu;
