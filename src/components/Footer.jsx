import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">PetLume</p>
          <p className="max-w-md text-sm">Cuidados mensais, serviços profissionais e produtos de alta qualidade para seu pet.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link to="/" className="transition hover:text-orange-300">Início</Link>
          <Link to="/sobre" className="transition hover:text-orange-300">Sobre</Link>
          <Link to="/produtos" className="transition hover:text-orange-300">Produtos</Link>
          <Link to="/contato" className="transition hover:text-orange-300">Contato</Link>
          <Link to="/faq" className="transition hover:text-orange-300">FAQ</Link>
          <Link to="/planos" className="transition hover:text-orange-300">Planos</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
