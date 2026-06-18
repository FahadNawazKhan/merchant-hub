import { Link } from "react-router-dom";
import { Cpu, Headphones, Compass, BookOpen, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Engineering",
    icon: Cpu,
    description: "Mechanical keyboards, keycaps, high-resolution screens, and desk accessories.",
    color: "bg-slate-900 border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5",
    iconColor: "text-blue-400"
  },
  {
    title: "Communication",
    icon: Headphones,
    description: "Noise-cancelling headphones, high-fidelity microphones, and studio audio.",
    color: "bg-slate-900 border-slate-800 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/5",
    iconColor: "text-purple-400"
  },
  {
    title: "Navigation",
    icon: Compass,
    description: "Ergonomic mice, dynamic trackpads, and portable tech built for travelers.",
    color: "bg-slate-900 border-slate-800 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/5",
    iconColor: "text-emerald-400"
  },
  {
    title: "Research",
    icon: BookOpen,
    description: "Reference manuals, journals, notebooks, and learning software collections.",
    color: "bg-slate-900 border-slate-800 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/5",
    iconColor: "text-amber-400"
  },
];

const HubModules = () => {
  return (
    <section id="categories" className="bg-slate-950 text-white py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3">
            SHOP BY CATEGORY
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Curated Workspace Categories
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Find items matching your professional domain. Click any module to filter and explore our curated product selections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                to="/products"
                className={`group flex flex-col sm:flex-row items-start gap-5 p-8 rounded-3xl border hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer ${cat.color}`}
              >
                <div className={`p-4 bg-slate-950/80 border border-slate-800 rounded-2xl ${cat.iconColor} shrink-0 group-hover:scale-110 transition duration-300`}>
                  <Icon size={28} />
                </div>

                <div className="flex-1 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      {cat.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                      {cat.description}
                    </p>
                  </div>

                  <div className={`text-sm font-semibold flex items-center gap-1.5 ${cat.iconColor} mt-auto`}>
                    Explore Collection
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HubModules;
