function ProductCard({ product }) {
    return (
        <div className="
    bg-slate-900
    border
    border-slate-800
    rounded-2xl
    overflow-hidden
    transition-all
    duration-300
    hover:border-blue-400
    hover:-translate-y-1
">

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">
                <h2 className="text-xl font-semibold text-white">
                    {product.name}
                </h2>

                <p className="text-slate-400 mt-3 text-sm line-clamp-2">
                    {product.description}
                </p>

                <p className="text-blue-400 mt-2 font-bold">
                    ₹{product.price}
                </p>

                <p className="text-slate-400 mt-2">
                    Stock: {product.stock}
                </p>
            </div>

        </div>
    );
}

export default ProductCard;