import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

const FeaturedEquipment = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await api.get("/products/items");
        setProducts(response.data.slice(0, 3));
      } catch (err) {
        console.error("Failed to load featured products", err);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <section className="bg-slate-950 text-white px-6 py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-blue-400 mb-3 font-semibold text-xs uppercase">
              TRENDING PRODUCTS
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold ">
              Best-Selling Equipment
            </h2>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold group transition w-fit"
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="text-slate-500 py-16 text-center bg-slate-900/40 border border-slate-800 rounded-3xl">
            No products found in the catalog database. Add some from the products page.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedEquipment;