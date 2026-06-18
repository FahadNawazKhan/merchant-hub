import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
  
        <Link
          to="/"
          className="text-lg font-bold text-white tracking-wider hover:text-slate-300 transition"
        >
          MERCHANT HUB
        </Link>

     
        <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium text-sm">
          <Link to="/products" className="hover:text-white transition">
            Products
          </Link>
          <a href="/#categories" className="hover:text-white transition">
            Categories
          </a>
          <a href="/#stats" className="hover:text-white transition">
            Why Us
          </a>
          <a href="/#footer" className="hover:text-white transition">
            Support
          </a>
        </div>

    
        <div className="flex items-center gap-6 text-slate-300 text-sm font-medium">
          <Link
            to="/cart"
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <ShoppingCart size={16} className="text-blue-500" />
            <span>Cart</span>
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-slate-500">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="hover:text-white transition cursor-pointer text-slate-400 font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-slate-200 transition font-bold text-xs"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;