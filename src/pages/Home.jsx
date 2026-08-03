import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { PawPrint, HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Banho e Tosa",
    description: "Tratamento completo com carinho e produtos premium para pelagem brilhante.",
    icon: PawPrint,
  },
  {
    title: "Consultas Nutricionais",
    description: "Plano alimentar personalizado para saúde ideal do seu pet.",
    icon: HeartHandshake,
  },
  {
    title: "Vacinação e Bem-estar",
    description: "Cuidamos da imunização e conforto dos seus animais de companhia.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery Pet",
    description: "Produtos e ração entregues em casa com agilidade e segurança.",
    icon: Sparkles,
  },
];

const featured = [
  {
    title: "Coleira Smart",
    description: "Monitoramento confortável para passeios mais tranquilos.",
  },
  {
    title: "Ração Premium",
    description: "Fórmula saudável para todas as raças e idades.",
  },
  {
    title: "Camas Anatômicas",
    description: "Conforto para noites de descanso com suporte ideal.",
  },
  {
    title: "Brinquedos Interativos",
    description: "Diversão inteligente que estimula o corpo e a mente.",
  },
];

function Home() {
  return (
    <div className="space-y-20">
      <section className="rounded-[2rem] border border-orange-500/20 bg-slate-950/70 p-8 shadow-2xl shadow-slate-900/50 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 ring-1 ring-orange-500/20">
              Pet shop com alma profissional
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Seu melhor amigo merece cuidado premium.
            </h1>
            <p className="max-w-2xl text-slate-300">
              PetLume é a pet shop que combina amor, saúde e modernidade com planos de mensalidade pensados para cuidar do seu pet todos os meses.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/planos" className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 sm:w-auto">
                Ver planos de mensalidade
              </Link>
              <Link to="/contato" className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-transparent px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-orange-400 sm:w-auto">
                Fale com a equipe
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-xl shadow-orange-500/10">
            <div className="space-y-4">
              <div className="rounded-3xl bg-[#0f172a] p-6 text-center text-slate-100 shadow-inner shadow-slate-900/30">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300">PetLume</p>
                <p className="mt-4 text-3xl font-semibold">Cuidados especiais</p>
                <p className="mt-2 text-slate-400">Planos mensais com banho, tosa e acompanhamento nutricional.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {featured.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/5 bg-slate-950/80 p-5 text-left">
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Destaques</p>
            <h2 className="text-3xl font-bold text-white">Serviços que seu pet vai adorar</h2>
          </div>
          <p className="max-w-xl text-slate-400">Uma experiência preparada para saúde, bem-estar e proteção em um só lugar.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-center shadow-xl shadow-black/20">
              <service.icon className="mx-auto h-11 w-11 rounded-2xl bg-orange-500/15 p-3 text-orange-300" />
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Catálogo</p>
            <h2 className="text-3xl font-bold text-white">Produtos e serviços em destaque</h2>
          </div>
          <Link to="/produtos" className="inline-flex items-center rounded-full border border-orange-500/50 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 transition hover:bg-orange-500/20">
            Ver catálogo completo
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} buttonText="Saiba mais" />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-r from-[#031025] via-[#08172e] to-[#10203b] p-10 shadow-2xl shadow-orange-500/10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Atendimento personalizado</p>
            <h2 className="text-3xl font-bold text-white">Deixe seu pet sempre protegido com nossos planos mensais.</h2>
            <p className="max-w-xl text-slate-300">Simplifique o cuidado com o seu pet: planos mensais acessíveis, atendimento dedicado e benefícios exclusivos a cada mês.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/planos" className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                Conhecer planos
              </Link>
              <Link to="/contato" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-orange-400">
                Entrar em contato
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8">
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900 p-6 text-slate-100">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Plano Sinal</p>
                <p className="mt-3 text-4xl font-bold">R$ 129 / mês</p>
                <p className="mt-2 text-slate-400">Banho e tosa mensal + limpeza express.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/90 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Suporte</p>
                  <p className="mt-2 text-lg font-semibold text-white">24h atendimento</p>
                </div>
                <div className="rounded-3xl bg-slate-950/90 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Desconto</p>
                  <p className="mt-2 text-lg font-semibold text-white">10% em produtos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
