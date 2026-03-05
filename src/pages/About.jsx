import React from "react";
import { motion } from "framer-motion";

const About = ({ darkMode }) => (
  <div
    className={`w-full min-h-screen flex flex-col items-center px-6 md:px-20 pt-[12rem] 
                ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
  >
    <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">
      {/* صورة about */}
      <motion.img
        src={"/assets/543903371_17907200442230824_172144135476417534_n.jpg"}
        alt="About Wahmy Burger"
        className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* النصوص */}
      <div>
        <motion.h2
          className="text-4xl font-bold mb-4 text-red-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Wahmy Burger
        </motion.h2>

        <motion.p
          className={`mb-4 leading-relaxed ${darkMode ? "text-white" : "text-gray-800"}`}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Wahmy Burger بدأ كفكرة صغيرة، مطعم برجر محلي عادي… لكن مع الشغف بالبرجر الطازة،
          والخلطات السرية، كبر الحلم وبقى مكان معروف لكل عشاق البرجر.
        </motion.p>

        <motion.p
          className={`mb-4 leading-relaxed ${darkMode ? "text-white" : "text-gray-800"}`}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          إحنا مش بس مطعم، إحنا تجربة! من أول ما تدخل لحد ما تخلص الأكل،
          عايزينك تحس بالفرق في الجودة والجو الممتع.🔥
        </motion.p>

        <motion.p
          className={`leading-relaxed ${darkMode ? "text-white" : "text-gray-800"}`}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          بنستخدم أفضل أنواع اللحوم، خبز طازة، وخضار مقطوع يوم بيوم.  
          غير السوس الخاص بينا اللي بيخلي الطعم 🔥🔥🔥.
        </motion.p>
      </div>
    </div>
  </div>
);

export default About;
