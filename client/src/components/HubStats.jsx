const stats = [
  {
    number: "12K+",
    label: "Engineers Equipped",
  },
  {
    number: "8.5K+",
    label: "Workstations Upgraded",
  },
  {
    number: "98%",
    label: "Satisfaction Rate",
  },
  {
    number: "24/7",
    label: "Expert Support",
  },
];

const HubStats = () => {
  return (
    <section className="bg-slate-950 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-400 mb-3">
          HUB STATUS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Trusted by builders worldwide.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold">
                {stat.number}
              </h3>

              <p className="text-slate-400 mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HubStats;
