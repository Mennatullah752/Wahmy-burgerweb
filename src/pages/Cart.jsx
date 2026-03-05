import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);

  // حساب الإجمالي
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert(`Proceeding to Checkout! Total amount: ${total} EGP`);
    // هنا ممكن تضيف ريديركت لصفحة دفع حقيقية لو حبيت
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen px-6 md:px-12 pt-[12rem]">
      {/* العنوان */}
      <motion.h1
        className="text-3xl font-bold mb-6 text-red-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Your Cart 🛒
      </motion.h1>

      {cartItems.length === 0 ? (
        // الرسالة لما الكارت فاضي
        <motion.p
          className="text-gray-500 mt-20 text-center text-lg"
          animate={{
            x: [0, -10, 10], // حركة هز
          }}
          transition={{
            duration: 0.6,
            repeat:1, //تتهز مرة
          }}
        >
        Your cart is empty!
        </motion.p>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-4">
          <ul>
            {cartItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex justify-between mb-2 p-2 border rounded-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <span>{item.name}</span>
                <div className="flex gap-2 items-center">
                  <span>{item.price} EGP</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-gray-700 text-white px-2 py-1 rounded"
                  >
                    ❌
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* الإجمالي */}
          <motion.div
            className="flex justify-between items-center p-2 border-t font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>Total:</span>
            <span>{total} EGP</span>
          </motion.div>

          {/* الأزرار */}
          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            <button
              onClick={clearCart}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Clear Cart
            </button>

            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold ml-auto"
            >
              Checkout
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
