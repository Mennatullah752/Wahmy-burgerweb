import React from "react";
import { motion } from "framer-motion"; // استيراد Framer Motion

const Home = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* صورة الهيرو */}
      <motion.img
        src={"/assets/burger-black.jpg"}
        alt="Burger"
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }} // يبدأ مكبر
        animate={{ scale: 1 }} // يصغر تدريجياً
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      {/* النصوص */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <motion.p
          className="text-2xl md:text-2xl mb-2 text-amber-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
          style={{ fontFamily: "'Pacifico', cursive" }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Wahmy Burger
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Fresh burgers, secret sauces, unforgettable taste.🔥
        </motion.p>

        <motion.a
          href="/menu"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          Order Now
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
