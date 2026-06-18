import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, ArrowRight } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Successfully subscribed with: ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-slate-950 text-white px-6 py-24 border-t border-slate-900 relative">
      <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center">
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-4">
            JOIN THE HUB COMMUNITY
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Get 10% Off Your First Setup Upgrade
          </h2>

          <p className="text-slate-400 mt-6 text-sm sm:text-base leading-relaxed">
            Subscribe to our newsletter to receive curated setup inspiration, exclusive product discounts, and early access to workspace hardware drops.
          </p>

          {/* Inline Email Form */}
          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-slate-950 border border-slate-800 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3.5 rounded-full hover:bg-slate-200 transition text-sm flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>

          <p className="text-slate-500 text-xs mt-4">
            Zero spam. Unsubscribe at any time. By subscribing, you agree to our Terms.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-900 px-6 py-2.5 rounded-full transition font-semibold text-sm cursor-pointer"
            >
              Or Browse the Shop
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;