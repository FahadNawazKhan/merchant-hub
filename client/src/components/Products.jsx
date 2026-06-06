import { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/products/items");

                console.log(response.data);

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

    const filteredProducts = products.filter((product) =>
        product.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
                <h1 className="text-2xl">Loading Products...</h1>
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
        <div className="min-h-screen bg-slate-950 text-white px-6 pt-23 py-12">
            <div className="max-w-7xl mx-auto">

                <h1 className="text-5xl font-bold mb-3">
                    Products
                </h1>

                <p className="text-slate-400 mb-8">
                    Discover premium workstation essentials,
                    productivity tools, and creator equipment.
                </p>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                        w-full
                        bg-slate-900
                        border
                        border-slate-800
                        rounded-xl
                        px-4
                        py-3
                        mb-8
                        text-white
                        placeholder:text-slate-400
                        focus:outline-none
                        focus:border-blue-400
                    "
                />

                <p className="text-slate-400 mb-6">
                    {filteredProducts.length} Product(s) Found
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Products;