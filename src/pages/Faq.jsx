function Faq() {
  const faqs = [
    { question: "Como agendo um banho e tosa?", answer: "Basta acessar a página de contato ou nos enviar uma mensagem pelo formulário para agendar seu horário." },
    { question: "O plano de mensalidade inclui banho e tosa?", answer: "Sim, todos os planos mensais incluem serviço de banho completo e cuidados de higiene conforme o nível escolhido." },
    { question: "Vocês entregam produtos em casa?", answer: "Sim, oferecemos delivery para produtos e rações em todo o bairro da loja." },
    { question: "Como funcionam os planos para gatos?", answer: "Nossos planos para gatos são adaptados com produtos e serviços apropriados para a saúde felina." },
    { question: "Posso cancelar o plano mensal a qualquer momento?", answer: "Sim, o cancelamento pode ser feito com aviso prévio e nosso time fará o processo de forma rápida." },
    { question: "Quais são as formas de pagamento aceitas?", answer: "Aceitamos cartão de crédito, débito, Pix e transferência bancária." },
  ];

  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-orange-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-slate-900/40">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200">
            Perguntas frequentes
          </span>
          <h1 className="text-4xl font-bold text-white">Dúvidas mais comuns sobre a PetLume</h1>
          <p className="max-w-3xl text-slate-300">Confira respostas rápidas sobre nossos serviços, planos mensais e atendimento pet.</p>
        </div>
      </section>

      <section className="grid gap-4">
        {faqs.map((item) => (
          <details key={item.question} className="group rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 transition hover:border-orange-500/40">
            <summary className="cursor-pointer text-lg font-semibold text-white list-none marker:hidden">{item.question}</summary>
            <p className="mt-4 text-slate-300">{item.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default Faq;
