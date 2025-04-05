import { Link, NavLink } from "react-router-dom";
import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-40 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <nav className="flex gap-4 items-center">
        <div className="bg-gray-400 rounded-full px-4 py-2 flex gap-4 text-white font-medium transition-all duration-300">
          <NavLink to="/about" className={({ isActive }) => isActive ? "" : ""}>
            About Us
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? "underline" : ""}>
            Features
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? "underline" : ""}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : ""}>
            Contact Us
          </NavLink>
        </div>

        <button className="bg-[#0c1c3f] text-white p-2 rounded-full hover:scale-105 transition">
          <Moon className="w-5 h-5" />
        </button>

        <Link
          to="/demo"
          className="bg-gray-200 border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all"
        >
          Get a Demo
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
