import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-xl font-black tracking-tight text-white">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500 text-slate-950">P</span>
          PetLume
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-black/20 lg:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>
        <nav className="hidden items-center gap-6 lg:flex">
          {[
            ["Início", "/"],
            ["Sobre", "/sobre"],
            ["Produtos", "/produtos"],
            ["Planos", "/planos"],
            ["Contato", "/contato"],
            ["FAQ", "/faq"],
          ].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-orange-500 text-slate-950" : "text-slate-300 hover:bg-slate-900/80 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4">
            {[
              ["Início", "/"],
              ["Sobre", "/sobre"],
              ["Produtos", "/produtos"],
              ["Planos", "/planos"],
              ["Contato", "/contato"],
              ["FAQ", "/faq"],
            ].map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-3 text-sm font-semibold transition ${
                    isActive ? "bg-orange-500 text-slate-950" : "text-slate-200 hover:bg-slate-900/80"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
