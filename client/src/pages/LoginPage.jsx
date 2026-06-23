import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

function LoginPage() {
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
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/products");
    } catch (err) {
      setError(err.response.data.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-slate-400 text-center mb-8">
          Sign in to access your dashboard and workspace
        </p>

        {error && (
          <div className="bg-red-950/50 border border-red-800 text-red-200 rounded-xl p-3 mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="*********"
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
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-slate-400 text-center text-sm mt-8">
          Don't have an account?{" "}
          <Link to="/register" className="text-white hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;