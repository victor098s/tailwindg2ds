import React from 'react'

const Cards = () => {
  return (
    <div>
       <section id="catalogo" className="rounded-[2rem] border border-orange-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-slate-900/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-sky-300">
                Os melhores
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Produtos para o seu pet !
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPXd_6Uz5sZgk6BTrj4awvmxpTossDKA-GUJXQ1EXdQ&s=10"
                  alt="Pote de comida para cachorro"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Pote de comida para cachorro
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Preço: <span className="font-bold text-green-500">R$ 50,00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Comprar agora
                </button>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCfE9u1JlxA54pr2xOZA5uZlv1qN0xbddQEdkGC9vug&s=10"
                  alt="Brinquedo para cachorro"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Brinquedo para cachorro
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Preço: <span className="font-bold text-green-500">R$ 20,00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Comprar agora
                </button>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMydQxg76pyyTAWkVTtyXn1mZ7j2Ik1-7fhzeNexh22A&s=10"
                  alt="Osso de roer para cachorro"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Osso de roer para cachorro
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Preço: <span className="font-bold text-green-500">R$ 50,00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Comprar agora
                </button>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlooMTq7UXC9dJIcKsZp2ORIB4vunF1yF0QAEI4Uw_1A&s=10"
                  alt="Pedigree para cachorro"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Pedigree para cachorro
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Preço: <span className="font-bold text-green-500">R$ 90,00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Comprar agora
                </button>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcZxyB-ZsTpaL8Q0gZu9NZ1lMGSuMCnpuhnWw89srGQ&s=10"
                  alt="Escova de pelos para cachorro"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Escova de pelos para cachorro
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Preço: <span className="font-bold text-green-500">R$ 200,00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Comprar agora
                </button>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT035MYKlpm1n6jkr9QZAiePehG3DEgZ50WowEBrAOWlw&s=10"
                  alt="Cama para gatos"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Cama para gatos</h3>
                  <p className="mt-3 text-slate-300">
                    Preço: <span className="font-bold text-green-500">R$ 220,00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Comprar agora
                </button>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJHaAVMvwpGfOdDe_QuX9IZfDI1ST9As28SZGLILURQ&s=10"
                  alt="Caixa de areia para gatos"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Caixa de areia para gatos
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Preço: <span className="font-bold text-green-500">R$ 180,00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Comprar agora
                </button>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-900/95">
              <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp8PXqqPRqHZvAG3Nyi5UYiU0hH1ifKMsMPsU_W-3Ww&s=10"
                  alt="Gaiola para hamsters"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Gaiola para hamsters
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Preço: <span className="font-bold text-green-500">R$ 210,00</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Comprar agora
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cards
