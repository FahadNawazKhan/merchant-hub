const modules = [
  {
    title: "Engineering",
    description:
      "Mechanical keyboards, monitors and workstation essentials.",
  },
  {
    title: "Communication",
    description:
      "Headphones, microphones and premium audio gear.",
  },
  {
    title: "Navigation",
    description:
      "Portable tech and tools built for mobility.",
  },
  {
    title: "Research",
    description:
      "Books, productivity tools and learning resources.",
  },
];

const HubModules = () => {
  return (
    <section className="bg-slate-950 text-white py-5 px-6">
      <div className="max-w-7xl mx-auto">
        
        <p className="text-blue-400 mb-3">
          HUB MODULES
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Built for every workspace.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div
              key={module.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {module.title}
              </h3>

              <p className="text-slate-400">
                {module.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HubModules;
