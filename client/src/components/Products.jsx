import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import { Plus, Search, ChevronRight } from "lucide-react";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get("search") || "";

    const [search, setSearch] = useState(querySearch);
    const [sortBy, setSortBy] = useState("default");

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/products/items");
                setProducts(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

 
    useEffect(() => {
        const urlQuery = searchParams.get("search") || "";
        setSearch(urlQuery);
    }, [searchParams]);

 
    const handleSearchChange = (value) => {
        setSearch(value);
        if (value) {
            setSearchParams({ search: value });
        } else {
            setSearchParams({});
        }
    };

  
    const handleResetFilters = () => {
        setSearch("");
        setSortBy("default");
        setSearchParams({});
    };

  
    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
        );
    });


    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "low") return a.price - b.price;
        if (sortBy === "high") return b.price - a.price;
        return 0;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
                <h1 className="text-2xl animate-pulse">Loading Products...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
                <h1 className="text-2xl text-red-400">{error}</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 pt-28 py-16">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
                    <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-slate-300">Shop Catalog</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-900">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Workspace Catalog</h1>
                        <p className="text-slate-400 mt-2 text-sm sm:text-base">
                            Discover and compare premium workstation electronics, desks, and essentials.
                        </p>
                    </div>
                    {user && user.role === "admin" && (
                        <Link
                            to="/products/create"
                            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold hover:bg-slate-200 transition text-sm cursor-pointer shrink-0"
                        >
                            <Plus size={16} />
                            Add Product
                        </Link>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900/20 border border-slate-900 rounded-2xl p-4 mb-6">
                    <div className="flex flex-1 items-center gap-4 w-full sm:w-auto">
                        <div className="relative w-full sm:w-72">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-600 transition"
                            />
                            <Search size={14} className="absolute left-3 top-2.5 text-slate-500" />
                            {search && (
                                <button
                                    onClick={() => handleSearchChange("")}
                                    className="absolute right-3 top-2 text-slate-400 hover:text-white transition font-bold text-sm cursor-pointer"
                                >
                                    &times;
                                </button>
                            )}
                        </div>
                        <span className="text-xs text-slate-400 font-semibold hidden md:inline">
                            Showing <span className="text-white">{sortedProducts.length}</span> product(s)
                        </span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                        <span className="text-xs text-slate-400 font-semibold md:hidden">
                            Showing <span className="text-white">{sortedProducts.length}</span> product(s)
                        </span>
                        <div className="flex items-center gap-2">
                            <label className="text-xs text-slate-500 font-semibold whitespace-nowrap">Sort By:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer"
                            >
                                <option value="default">Default Sort</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {sortedProducts.length === 0 ? (
                    <div className="py-24 text-center bg-slate-900/20 border border-slate-900 rounded-[2rem] space-y-4">
                        <div className="text-slate-600 font-medium">No workspace equipment matches your search query.</div>
                        <button
                            onClick={handleResetFilters}
                            className="bg-slate-900 text-white border border-slate-800 px-5 py-2 rounded-full font-bold hover:bg-slate-800 transition text-xs cursor-pointer"
                        >
                            Clear Search
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {sortedProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                onDelete={(id) => setProducts(products.filter((p) => p._id !== id))}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Products;