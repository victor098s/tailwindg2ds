import Card from "../../components/Card.jsx";

const products = [
  {
    title: "Ração Balanceada",
    description: "Fórmula nutritiva para cães e gatos de todas as idades.",
  },
  {
    title: "Coleira Conforto",
    description: "Design ergonômico com ajuste seguro e material resistente.",
  },
  {
    title: "Camisa Pet",
    description: "Roupa confortável para passeios e dias frios.",
  },
  {
    title: "Brinquedo Interativo",
    description: "Estimula o pet com diversão e recompensa.",
  },
  {
    title: "Caminha Anatômica",
    description: "Suporte ideal para descanso prolongado e relaxamento.",
  },
  {
    title: "Kit Higiene",
    description: "Produtos para banho, escovação e cuidados diários.",
  },
  {
    title: "Suplemento Vital",
    description: "Apoia a saúde das articulações e pelagem.",
  },
  {
    title: "Petiscos Naturais",
    description: "Saborosos e saudáveis para recompensar comportamentos.",
  },
];

function Produtos() {
  return (
    <div className="space-y-12">
      <section className="rounded-[2rem] border border-orange-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-slate-900/40">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200">
            Catálogo</span>
          <h1 className="text-4xl font-bold text-white">Produtos e serviços para o bem-estar do seu pet</h1>
          <p className="max-w-3xl text-slate-300">Explore nossa seleção de produtos cuidadosamente escolhidos para manter seu pet feliz, saudável e protegido.</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.title}
            title={product.title}
            description={product.description}
            buttonText="Comprar"
          />
        ))}
      </section>
    </div>
  );
}

export default Produtos;
