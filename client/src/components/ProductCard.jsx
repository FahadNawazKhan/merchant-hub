import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function ProductCard({ product, onDelete }) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleAddToCart = async () => {
        try {
            await api.post("/cart/add", { productId: product._id, quantity: 1 });
            alert("Added to cart!");
        } catch (error) {
            if (error.response.status === 401 || error.response.data.message === "unauthorized") {
                navigate("/login");
            } else {
                alert(error.response.data.message || "Failed to add to cart");
            }
        }
    };

    const handleDelete = async () => {
        if (window.confirm(`Delete ${product.name}?`)) {
            try {
                await api.delete(`/products/delete/${product._id}`);
                alert("Product deleted!");
                if (onDelete) onDelete(product._id);
            } catch (error) {
                if (error.response.status === 401 || error.response.data.message === "unauthorized") {
                    navigate("/login");
                } else {
                    alert(error.response.data.message || "Failed to delete product");
                }
            }
        }
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col justify-between h-full group">

            <div>
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-950">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                        {product.name}
                    </h3>

                    <p className="text-slate-400 mt-3 text-sm leading-relaxed line-clamp-2 h-10">
                        {product.description}
                    </p>
                </div>
            </div>


            <div className="px-6 pb-6 pt-0 mt-auto">
                <div className="flex items-center justify-between gap-4 mt-2">
                    <span className="text-2xl font-extrabold text-white">
                        ₹{product.price}
                    </span>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="w-full mt-5 py-3 rounded-xl font-semibold bg-white text-black hover:bg-slate-200 shadow-md shadow-white/5 transition text-sm flex items-center justify-center cursor-pointer"
                >
                    Add to Cart
                </button>

                {user && user.role === "admin" && (
                    <button
                        onClick={handleDelete}
                        className="w-full mt-2 bg-red-950/40 text-red-400 border border-red-900/30 py-2.5 rounded-xl font-semibold hover:bg-red-900/50 hover:text-white transition cursor-pointer text-xs"
                    >
                        Delete Product
                    </button>
                )}
            </div>

        </div>
    );
}

export default ProductCard;