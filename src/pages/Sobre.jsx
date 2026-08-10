function Sobre() {
  return (
    <div className="space-y-12">
      <section className="rounded-[2rem] border border-orange-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-slate-900/40">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200">
            Conheça a PetLume
          </span>
          <h1 className="text-4xl font-bold text-white">Bem-vindo à pet shop que cuida como família.</h1>
          <p className="max-w-3xl text-slate-300">A PetLume nasceu para conectar amor e segurança em um atendimento profissional para cães e gatos. Aqui, cada serviço é pensado para a rotina e o bem-estar do seu pet.</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
          <h2 className="text-3xl font-bold text-white">Nossa história</h2>
          <p className="text-slate-300">Fundada por especialistas em saúde animal, a PetLume cresceu a partir da paixão por transformar o cuidado diário dos pets em uma experiência completa e moderna.</p>
        </div>
        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
          <h2 className="text-3xl font-bold text-white">Missão</h2>
          <p className="text-slate-300">Promover qualidade de vida para pets e tranquilidade para seus tutores, através de serviços confiáveis, acolhedores e personalizados.</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          { title: "Visão", description: "Ser a pet shop de referência em atendimento humanizado e soluções de cuidado pet no país." },
          { title: "Valores", description: "Confiança, carinho, profissionalismo e inovação são a base do nosso trabalho." },
          { title: "Equipe", description: "Profissionais qualificados em estética animal, nutrição e atendimento que entendem o valor do seu pet." },
        ].map((item) => (
          <div key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-[#081021] to-[#101f37] p-8 shadow-2xl shadow-orange-500/10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Nossa equipe</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Profissionais que colocam o pet em primeiro lugar.</h2>
            <p className="mt-4 text-slate-300">Nossa equipe une veterinários, tosadores e especialistas em comportamento animal para entregar um serviço completo e confiável.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Atendentes experientes",
              "Tosadores certificados",
              "Plano alimentar personalizado",
              "Acompanhamento nutricional",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-slate-950/90 p-5 text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;
