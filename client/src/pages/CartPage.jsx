import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

function CartPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  const fetchCart = async () => {
    try {
      const response = await api.get("/cart");
      setItems(response.data.items || []);
    } catch (err) {
      setError("Please sign in to view your cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      await api.delete("/cart/remove", { data: { productId } });
      fetchCart();
    } catch (err) {
      alert("Failed to remove item");
    }
  };

  const handleUpdateQuantity = async (productId, currentQuantity, amount) => {
    if (currentQuantity + amount <= 0) {
      handleRemove(productId);
      return;
    }
    try {
      await api.post("/cart/add", { productId, quantity: amount });
      fetchCart();
    } catch (err) {
      alert("Failed to update quantity");
    }
  };

 
  const cartSubtotal = items.reduce((acc, item) => {
    if (item.product) {
      return acc + item.product.price * item.quantity;
    }
    return acc;
  }, 0);

 

  const totalCost = cartSubtotal 


  const handleCheckout = () => {
    alert("Checkout Successful! Your order has been placed. Thank you for supporting Merchant Hub!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-2xl ">Loading Cart...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-6 px-6">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-full text-slate-500">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-2xl font-bold text-center">{error}</h1>
        <Link
          to="/login"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition text-sm cursor-pointer"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 pt-28 py-16">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-3xl max-w-3xl mx-auto flex flex-col items-center justify-center p-6 space-y-6">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-full text-slate-600">
              <ShoppingBag size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Your cart is empty</h2>
              <p className="text-slate-400 mt-2 text-sm max-w-md">
                Looks like you haven't added any products to your workspace catalog cart yet. Explore premium creator setups to start.
              </p>
            </div>
            <Link
              to="/products"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition text-sm cursor-pointer inline-flex items-center gap-2"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
    
            <div className="lg:col-span-2 space-y-4">

              {items.map((item) => {
                if (!item.product) return null;
                return (
                  <div
                    key={item.product._id}
                    className="grid grid-cols-1 sm:grid-cols-12 items-center bg-slate-900/40 border border-slate-900 rounded-3xl p-6 gap-4 sm:gap-0 hover:border-slate-800 transition duration-300"
                  >
                  
                    <div className="col-span-12 sm:col-span-6 flex items-center gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-2xl border border-slate-800 shrink-0"
                      />
                      <div>
                        <h3 className="font-bold text-white leading-tight">
                          {item.product.name}
                        </h3>
                        <p className="text-slate-400 text-xs mt-1">
                          Unit Price: ₹{item.product.price}
                        </p>
                      </div>
                    </div>

               
                    <div className="col-span-6 sm:col-span-3 flex justify-center">
                      <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-1.5 rounded-2xl">
                        <button
                          onClick={() => handleUpdateQuantity(item.product._id, item.quantity, -1)}
                          className="bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white w-7 h-7 rounded-xl font-bold flex items-center justify-center transition cursor-pointer"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-white w-6 text-center font-bold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.product._id, item.quantity, 1)}
                          className="bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white w-7 h-7 rounded-xl font-bold flex items-center justify-center transition cursor-pointer"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

              
                    <div className="col-span-4 sm:col-span-2 text-left sm:text-right font-extrabold text-white text-lg">
                      ₹{item.product.price * item.quantity}
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex justify-end">
                      <button
                        onClick={() => handleRemove(item.product._id)}
                        className="text-slate-500 hover:text-red-400 p-2 rounded-xl hover:bg-red-500/5 transition cursor-pointer"
                        aria-label="Remove Item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                );
              })}

            
              <div className="pt-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition"
                >
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>
              </div>

            </div>

     
            <div className="lg:col-span-1 lg:sticky lg:top-28">

              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 space-y-6">
                
                <h2 className="text-lg font-bold border-b border-slate-800 pb-4">
                  Order Summary
                </h2>

                <div className="space-y-3.5 text-sm">
                  
                  

                 

                  <div className="flex justify-between text-base font-bold pt-4 mt-2">
                    <span className="text-white">Order Total</span>
                    <span className="text-white text-xl font-extrabold">₹{totalCost}</span>
                  </div>

                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-white hover:bg-slate-200 text-black py-3.5 rounded-xl font-bold transition text-sm cursor-pointer shadow-lg shadow-white/5 flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default CartPage;