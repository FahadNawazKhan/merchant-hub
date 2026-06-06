const FeaturedEquipment = () => {
  return (
    <section className="bg-slate-950 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-400 mb-3">
          FEATURED EQUIPMENT
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Built for your next project.
        </h2>

        <div className="grid gap-6">

          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16">
            <p className="text-blue-400 mb-2">
              ORBITAL MK-I
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Precision typing.
              <br />
              Zero distractions.
            </h3>

            <p className="text-slate-400 max-w-xl">
              Engineered for developers, designers and builders who spend
              hours creating the future.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16">
            <p className="text-cyan-400 mb-2">
              TITAN ARM
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Elevate your
              workspace.
            </h3>

            <p className="text-slate-400 max-w-xl">
              Premium monitor mounting designed for clean setups and
              maximum productivity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16">
            <p className="text-purple-400 mb-2">
              NOVA AUDIO
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Hear every detail.
            </h3>

            <p className="text-slate-400 max-w-xl">
              Studio-grade sound for focused work, gaming and creation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedEquipment;