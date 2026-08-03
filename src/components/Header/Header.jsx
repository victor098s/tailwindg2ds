import { useState } from "react";

function Header() {

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080914]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          className="flex items-center gap-1 text-xl font-black tracking-tight"
          aria-label="VliteStreaming Streaming"
        >
          <span className="grid h-10 w-28 place-items-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-500 text-sm shadow-lg shadow-slate-400/30">
            VliteStreaming
          </span>
          <span className="text-violet-500">+</span>
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-slate-700 px-3 py-2 text-white transition hover:bg-violet-400 rounded-xl"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
        {menuOpen && (
          <div className="absolute right-5 top-16 w-48 rounded-xl border border-white/10 bg-[#080914]/95 p-4 shadow-lg shadow-black/50 backdrop-blur-xl">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#inicio"
                  className="block rounded-lg px-3 py-2 transition hover:bg-violet-400/10"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="block rounded-lg px-3 py-2 transition hover:bg-violet-400/10"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="block rounded-lg px-3 py-2 transition hover:bg-violet-400/10"
                >
                  Catálogo
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
    </header>
  );
}

export default Header;
