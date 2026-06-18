import { Link } from "react-router-dom";
import { Truck, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="relative min-h-screen bg-slate-950 text-white flex items-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
      
        <div className="flex flex-col text-left">
          

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Equip Your <span className="text-blue-500">Workspace</span>.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
            Premium technology, productivity tools, and creator gear designed for software engineers, builders, and developers who seek visual and functional perfection in their setup.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {user ? (
              <>
                <Link
                  to="/products"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 text-center"
                >
                  Browse Products
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/cart"
                  className="border border-slate-800 bg-slate-900/60 backdrop-blur text-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-800 transition text-center"
                >
                  View Cart
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 text-center"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/products"
                  className="border border-slate-800 bg-slate-900/60 backdrop-blur text-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-800 transition text-center"
                >
                  Explore Equipment
                </Link>
              </>
            )}
          </div>

         
          <div className="mt-12 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-950/50 border border-blue-900/30 text-blue-400 rounded-lg shrink-0">
                <Truck size={16} />
              </div>
              <div>
                <p className="font-semibold text-white">Free Shipping</p>
                <p className="text-[10px]">On all orders over ₹999</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-950/50 border border-blue-900/30 text-blue-400 rounded-lg shrink-0">
                <ShieldCheck size={16} />
              </div>
              <div>
                <p className="font-semibold text-white">2-Year Warranty</p>
                <p className="text-[10px]">Guaranteed durability</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-950/50 border border-blue-900/30 text-blue-400 rounded-lg shrink-0">
                <RefreshCw size={16} />
              </div>
              <div>
                <p className="font-semibold text-white">30-Day Returns</p>
                <p className="text-[10px]">Hassle-free process</p>
              </div>
            </div>
          </div>

        </div>

   
        <div className="flex justify-center items-center">
          <img
            src="/workspace_hero.png"
            alt="Developer Desk Setup"
            className="w-full max-w-lg h-auto object-cover rounded-3xl border border-slate-800 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;