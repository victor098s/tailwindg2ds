function Contato() {
  return (
    <div className="space-y-12">
      <section className="rounded-[2rem] border border-orange-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-slate-900/40">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200">
            Fale conosco
          </span>
          <h1 className="text-4xl font-bold text-white">Vamos construir o cuidado ideal para seu pet.</h1>
          <p className="max-w-3xl text-slate-300">Envie sua mensagem para agendar um serviço, tirar dúvidas sobre planos ou falar com a nossa equipe de atendimento.</p>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-black/20">
          <form className="space-y-6">
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Nome</span>
              <input type="text" placeholder="Nome completo" className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-orange-400" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Email</span>
              <input type="email" placeholder="seu@email.com" className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-orange-400" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Assunto</span>
              <input type="text" placeholder="Agendamento, planos ou dúvidas" className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-orange-400" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">Mensagem</span>
              <textarea rows="5" placeholder="Conte-nos como podemos ajudar" className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition focus:border-orange-400"></textarea>
            </label>
            <button type="submit" className="inline-flex w-full justify-center rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
              Enviar mensagem
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-lg shadow-black/20">
            <h2 className="text-2xl font-bold text-white">Mapa fictício</h2>
            <p className="mt-3 text-slate-300">Nosso pet shop está localizado no coração da cidade. Traga seu amigo para uma experiência completa.</p>
            <div className="mt-6 h-64 rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-slate-400">
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                <div className="h-full rounded-3xl bg-slate-950" />
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-slate-100 shadow-lg shadow-black/20">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Telefone</p>
              <p className="mt-3 text-xl font-semibold">(11) 4002-8922</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-slate-100 shadow-lg shadow-black/20">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Email</p>
              <p className="mt-3 text-xl font-semibold">contato@petlume.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contato;
