import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center text-center">
      <div className="max-w-2xl rounded-[2rem] border border-orange-500/20 bg-slate-950/80 p-12 shadow-2xl shadow-orange-500/10">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Erro 404</p>
        <h1 className="mt-6 text-5xl font-bold text-white">Página não encontrada</h1>
        <p className="mt-4 text-slate-300">Parece que o caminho que você procurou não existe. Volte para a página inicial e continue explorando nossos planos e serviços.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
