import { navItems } from "../../data/siteContent";

export default function Footer({ goToPage }) {
  return (
    <footer className="border-t border-white/60 bg-white/70 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Ateliê Costura & Produção</p>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Site institucional com base pronta para crescer junto com o negócio e
            receber integrações futuras com banco de dados, pedidos e análises.
          </p>
        </div>

        <div>
          <p className="font-semibold">Navegação</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToPage(item.id)}
                className="text-left transition hover:text-neutral-900"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold">Contato</p>
          <div className="mt-4 space-y-2 text-sm text-neutral-600">
            <p>WhatsApp: (11) 99999-9999</p>
            <p>E-mail: contato@ateliecostura.com</p>
            <p>São Paulo - SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}