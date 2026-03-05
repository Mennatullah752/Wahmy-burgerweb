import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const { cartItems } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-[30px] left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between items-center p-4 bg-red-600 bg-opacity-80 text-white rounded-3xl shadow-lg z-50`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold hover:tracking-widest transition-all transform hover:scale-100"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Wahmy Burger 🍔
      </Link>

      {/* زرار الموبايل */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* لينكات */}
      <ul
        className={`flex-col md:flex md:flex-row md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-red-600 md:bg-transparent transition-all duration-300 ease-in-out ${
          open ? "flex" : "hidden"
        }`}
      >
        {["Home", "Menu", "About", "Contact"].map((link) => (
          <li
            key={link}
            className="p-2 text-lg md:text-base relative group transform transition-transform duration-300 hover:scale-105"
          >
            <Link
              to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
              className="after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
            >
              {link}
            </Link>
          </li>
        ))}
        <li className="p-2 text-lg md:text-base relative group transform transition-transform duration-300 hover:scale-105">
          <Link
            to="/cart"
            className="text-lg after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
          >
             🛒 ({cartItems.length})
          </Link>
        </li>
        <div className="flex gap-3">
        <div className="flex gap-3">
  <Link
    to="/login"
    className="border-2 border-white text-white font-medium hover:bg-white hover:text-red-600 hover:scale-105 px-5 py-2 rounded-xl transition duration-300"
  >
     Log In  
  </Link>
  <Link
    to="/register"
    className="bg-white text-red-600 font-medium hover:bg-gray-300 hover:scale-105 px-5 py-2 rounded-xl transition duration-300"
  >
    Register
  </Link>
</div>

</div>

        <li className="p-2 text-lg md:text-base">
          <button onClick={toggleDarkMode} className="transform transition-transform duration-300 hover:scale-110">
            {darkMode ? "☀️" : "🌘"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

