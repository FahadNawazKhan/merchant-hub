const stats = [
  {
    number: "15K+",
    label: "Orders Shipped",
    sub: "Delivered globally with care",
  },
  {
    number: "99.8%",
    label: "Customer Rating",
    sub: "Based on 4,000+ online reviews",
  },
  {
    number: "24/7",
    label: "Expert Support",
    sub: "Instant help when you need it",
  },
  {
    number: "2 Year",
    label: "Warranty Included",
    sub: "Guaranteed product longevity",
  },
];

const HubStats = () => {
  return (
    <section id="stats" className="bg-slate-950 text-white px-6 py-24 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-3">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Trusted by Builders Worldwide
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            We focus on premium build quality, standard warranty policies, and expert assistance, making our store a top-rated destination for workstation setup upgrades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            return (
              <div
                key={stat.label}
                className="text-center p-8 bg-slate-900/40 border border-slate-900 rounded-3xl hover:border-slate-800 transition duration-300 flex flex-col items-center justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                  {stat.number}
                </h3>
                
                <p className="text-slate-200 font-semibold text-lg">
                  {stat.label}
                </p>
                
                <p className="text-slate-500 text-sm mt-1">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HubStats;
