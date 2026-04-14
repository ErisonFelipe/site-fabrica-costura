import { ArrowRight, Menu, X } from "lucide-react";
import NavButton from "./NavButton";
import { navItems, pageTitle } from "../../data/siteContent";

export default function Header({
  currentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
  goToPage,
}) {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-orange-500 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
                Ateliê Costura & Produção
              </p>
              <p className="text-sm text-neutral-500">
                Confecção com qualidade, prazo e cuidado
              </p>
            </div>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              {navItems.map((item) => (
                <NavButton
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  currentPage={currentPage}
                  goToPage={goToPage}
                />
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-700 shadow-sm md:hidden"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {mobileMenuOpen ? (
            <nav className="mt-4 grid gap-2 md:hidden">
              {navItems.map((item) => (
                <NavButton
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  currentPage={currentPage}
                  goToPage={goToPage}
                  mobile
                />
              ))}
            </nav>
          ) : null}
        </div>
      </header>

      <section className="border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Página atual
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">
              {pageTitle[currentPage]}
            </h1>
          </div>

          <button
            onClick={() => goToPage("contato")}
            className="hidden items-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-300 transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Pedir orçamento
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}