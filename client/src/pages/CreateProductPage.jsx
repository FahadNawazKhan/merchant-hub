import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function CreateProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);

      const uploadRes = await api.post("/products/upload", formData);

      await api.post("/products/create", {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        image: uploadRes.data.imageUrl,
      });

      alert("Product Created!");
      navigate("/products");
    } catch (err) {
      alert(err.response.data.errors.join(", ") || "Failed to create product");
    }
  };

  return (
    <div className="pt-24 max-w-md mx-auto text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-5">
        
  
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">
            Product Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 p-3 rounded-xl focus:outline-none focus:border-blue-400"
            placeholder="e.g. Orbital Keyboard"
          />
        </div>

  
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">
            Description <span className="text-red-400">*</span>
          </label>
          <textarea
            required
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 p-3 rounded-xl focus:outline-none focus:border-blue-400"
            placeholder="Provide details (min 10 characters)"
          />
        </div>

      
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">
              Price (₹) <span className="text-red-400">*</span>
            </label>
            <input
              type="number"
              required
              min="1"
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 p-3 rounded-xl focus:outline-none focus:border-blue-400"
              placeholder="₹"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">
              Stock Quantity <span className="text-red-400">*</span>
            </label>
            <input
              type="number"
              required
              min="0"
              onChange={(e) => setStock(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 p-3 rounded-xl focus:outline-none focus:border-blue-400"
              placeholder="Qty"
            />
          </div>
        </div>


        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">
            Product Image <span className="text-red-400">*</span>
          </label>
          <input
            type="file"
            required
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full bg-slate-900 border border-slate-800 p-3 rounded-xl focus:outline-none"
          />
        </div>

        

      
        <div className="flex gap-4 pt-2">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="w-1/2 border border-slate-800 text-slate-400 p-3 rounded-xl hover:text-white hover:border-slate-600 transition cursor-pointer text-center font-medium"
          >
            Cancel
          </button>
          
          <button 
            type="submit" 
            className="w-1/2 bg-white text-black p-3 rounded-xl font-bold hover:bg-slate-200 transition cursor-pointer"
          >
            Create
          </button>
        </div>

      </form>
    </div>
  );
}

export default CreateProductPage;
