
import { useEffect } from "react";
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import api from "./api/axios";

const App = () => {
  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await api.get("/auth/me");
        localStorage.setItem("user", JSON.stringify(response.data));
      } catch (err) {
        localStorage.removeItem("user");
      }
    };

    verifySession();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <AppRoutes />
      
    </div>
  );
};

export default App;