const HeroSection = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        
        <p className="text-blue-400 font-medium mb-4">
          MERCHANT HUB
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Equip Your Workspace.
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          Premium technology, productivity gear and creator essentials
          designed for engineers, builders and explorers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
            Get Started
          </button>

          <button className="border border-slate-700 px-6 py-3 rounded-full">
            Explore Equipment
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;