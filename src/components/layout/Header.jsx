import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import NavButton from "./NavButton";
import { navItems, pageTitle } from "../../data/siteContent";

export default function Header({
  currentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
  goToPage,
}) {
  function handleOpenMenu() {
    setMobileMenuOpen(true);
  }

  function handleCloseMenu() {
    setMobileMenuOpen(false);
  }

  function handleNavigate(id) {
    goToPage(id);
    handleCloseMenu();
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur-xl">
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
              onClick={handleOpenMenu}
              aria-label="Abrir menu"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:scale-[1.03] md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseMenu}
            />

            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <div>
                  <p className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-orange-500 bg-clip-text text-base font-semibold text-transparent">
                    Ateliê Costura & Produção
                  </p>
                  <p className="text-xs text-neutral-500">Menu de navegação</p>
                </div>

                <button
                  onClick={handleCloseMenu}
                  aria-label="Fechar menu"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 text-neutral-700"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-3 px-5 py-6">
                {navItems.map((item) => {
                  const active = currentPage === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`rounded-2xl px-4 py-4 text-left text-sm font-medium transition ${
                        active
                          ? "bg-neutral-900 text-white shadow-lg"
                          : "bg-neutral-50 text-neutral-700 ring-1 ring-neutral-200 hover:bg-neutral-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="border-t border-neutral-200 px-5 py-5">
                <button
                  onClick={() => handleNavigate("contato")}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg"
                >
                  Pedir orçamento
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}