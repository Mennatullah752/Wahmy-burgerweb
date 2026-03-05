// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق من البيانات
    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠️ من فضلك املأ جميع البيانات.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);

    // اخفاء الرسالة بعد 3 ثواني
    setTimeout(() => setSubmitted(false), 3000);

    // تصفير الفورم
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-12 px-6 md:px-20 h-100 pt-[12rem]">
      {/* العنوان */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-red-600"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Contact Us
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* معلومات التواصل */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-500 mb-2">
              📍 Address: 123 Burger Street, Cairo, Egypt
            </p>
            <p className="text-gray-500 mb-2">📞 Phone: +20 111 222 333</p>
            <p className="text-gray-500 mb-6">
              📧 Email: info@wahmyburger.com
            </p>
          </motion.div>

          {/* الخريطة */}
          <div className="rounded-2xl overflow-hidden shadow-lg mt-6">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110529.7061580467!2d31.1557141962352!3d30.059469889842988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c69e4f1d25%3A0x36f5b3b7e8a87e!2z2KfZhNi52LHYp9iq2KfYqiDYp9mE2K_Ysdiq2KfYqQ!5e0!3m2!1sen!2seg!4v1634634523456!5m2!1sen!2seg"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* الفورم */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Send
            </button>
          </form>

          {/* رسالة الخطأ */}
          {error && (
            <motion.p
              className="mt-4 text-red-500 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {error}
            </motion.p>
          )}

          {/* رسالة الشكر */}
          {submitted && (
            <motion.p
              className="mt-4 text-green-500 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              ✅ شكراً! تم إرسال رسالتك بنجاح.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
