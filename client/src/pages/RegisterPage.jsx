import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/register", { name, email, password });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/products");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-slate-400 text-center mb-8">
          Join us to explore and order premium equipment
        </p>

        {error && (
          <div className="bg-red-950/50 border border-red-800 text-red-200 rounded-xl p-3 mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                bg-slate-950
                border
                border-slate-800
                rounded-xl
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-blue-400
              "
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                bg-slate-950
                border
                border-slate-800
                rounded-xl
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-blue-400
              "
              placeholder="name@domain.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                bg-slate-950
                border
                border-slate-800
                rounded-xl
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-blue-400
              "
              placeholder="•••••••• (min 6 characters)"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-white
              text-black
              font-semibold
              py-3
              rounded-xl
              hover:bg-slate-200
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-slate-400 text-center text-sm mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;