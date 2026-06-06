import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-xl font-bold text-white"
        >
          MERCHANT HUB
        </Link>

        <div className="md:flex items-center gap-8 text-slate-300">
          <Link
            to="/products"
            className="hover:text-white transition"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="hover:text-white transition"
          >
            Cart
          </Link>

          <Link
            to="/login"
            className="hover:text-white transition"
          >
            Login
          </Link>
        </div>

        <Link
          to="/register"
          className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;