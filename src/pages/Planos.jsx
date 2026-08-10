import Card from "../components/Card.jsx";

const plans = [
  {
    name: "Plano Básico",
    price: "R$ 99",
    description: "Ideal para pets que precisam de um cuidado mensal leve.",
    features: ["Banho básico", "Escovação", "Avaliação de pelagem"],
  },
  {
    name: "Plano Premium",
    price: "R$ 149",
    description: "Inclui banho completo, tosa e acompanhamento nutricional.",
    features: ["Banho e tosa", "Hidratação", "Suporte nutricional"],
  },
  {
    name: "Plano Elite",
    price: "R$ 199",
    description: "Para quem busca o pacote completo de bem-estar mensal.",
    features: ["Serviço completo", "Entrega de produtos", "Atendimento prioritário"],
  },
];

function Planos() {
  return (
    <div className="space-y-12">
      <section className="rounded-[2rem] border border-orange-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-orange-500/10">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200">
            Planos de mensalidade</span>
          <h1 className="text-4xl font-bold text-white">Escolha o plano perfeito para o seu pet.</h1>
          <p className="max-w-3xl text-slate-300">Planos flexíveis com benefícios exclusivos para garantir mais saúde, conforto e economia mês a mês.</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            title={plan.name}
            description={plan.description}
            buttonText="Assinar agora"
            extra={
              <ul className="mt-6 space-y-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-orange-400">{feature}</li>
                ))}
              </ul>
            }
          />
        ))}
      </section>
    </div>
  );
}

export default Planos;
