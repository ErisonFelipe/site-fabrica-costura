import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Shirt,
  Sparkles,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';

export default function CosturaWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'Confecção sob demanda',
      description:
        'Produção de peças sob medida para marcas, lojas, eventos e pedidos personalizados.',
      details: ['Peças exclusivas', 'Controle de qualidade', 'Prazos alinhados'],
    },
    {
      title: 'Uniformes e produção em lote',
      description:
        'Atendimento para empresas, escolas e equipes que precisam de escala com padrão visual consistente.',
      details: ['Produção em volume', 'Padronização', 'Entrega organizada'],
    },
    {
      title: 'Pilotagem e modelagem',
      description:
        'Desenvolvimento da peça piloto para validar caimento, acabamento e viabilidade antes da produção final.',
      details: ['Ajustes técnicos', 'Validação de modelagem', 'Menos retrabalho'],
    },
    {
      title: 'Ajustes e acabamento',
      description:
        'Correções, reforços e finalizações que melhoram a apresentação e a qualidade da entrega.',
      details: ['Revisão final', 'Refino de peça', 'Mais valor percebido'],
    },
  ];

  const testimonials = [
    {
      name: 'Loja Essência Urbana',
      text: 'Tivemos mais segurança nos prazos e ótima qualidade nas peças entregues.',
    },
    {
      name: 'Equipe Impacto Eventos',
      text: 'Os uniformes vieram padronizados e com ótimo acabamento. Atendimento muito organizado.',
    },
    {
      name: 'Marca Autoral Vértice',
      text: 'A pilotagem ajudou a evitar erros antes de produzir em lote. Isso economizou tempo e dinheiro.',
    },
  ];

  const gallery = [
    'Moda casual',
    'Uniformes profissionais',
    'Peças em lote',
    'Detalhes de acabamento',
    'Costura técnica',
    'Produção sob medida',
  ];

  const metrics = [
    { label: 'Pedidos entregues', value: '5 mil+' },
    { label: 'Clientes atendidos', value: '200+' },
    { label: 'Experiência', value: '10+ anos' },
    { label: 'Foco', value: 'Qualidade e prazo' },
  ];

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'servicos', label: 'Serviços' },
      { id: 'sobre', label: 'Sobre' },
      { id: 'galeria', label: 'Galeria' },
      { id: 'contato', label: 'Contato' },
    ],
    []
  );

  const pageTitle = {
    home: 'Home',
    servicos: 'Serviços',
    sobre: 'Sobre a fábrica',
    galeria: 'Galeria',
    contato: 'Contato',
  };

  function goToPage(id) {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  }

  function NavButton({ id, label, mobile = false }) {
    const active = currentPage === id;

    return (
      <button
        onClick={() => goToPage(id)}
        className={`transition ${
          mobile
            ? `rounded-2xl px-4 py-3 text-left ${active ? 'bg-neutral-900 text-white shadow-lg' : 'bg-white text-neutral-700 ring-1 ring-neutral-200'}`
            : active
              ? 'font-semibold text-neutral-900'
              : 'text-neutral-500 hover:text-neutral-900'
        }`}
      >
        {label}
      </button>
    );
  }

  function SectionHeader({ eyebrow, title, description }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-600">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-neutral-600">{description}</p> : null}
      </motion.div>
    );
  }

  function HomePage() {
    return (
      <>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.10),_transparent_30%)]" />

          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm text-rose-600 shadow-sm backdrop-blur">
                <Sparkles size={16} />
                Produção de costura profissional
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-6xl">
                Sua fábrica de costura com presença digital elegante e profissional.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
                Um site pensado para transmitir confiança, destacar serviços e transformar visitas em pedidos de orçamento.
                Porque visual sem cuidado passa amadorismo em dois segundos. O cliente julga mesmo, e nem está errado.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => goToPage('contato')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-300 transition hover:-translate-y-0.5"
                >
                  Solicitar orçamento
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => goToPage('servicos')}
                  className="rounded-2xl border border-neutral-300 bg-white/90 px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                >
                  Ver serviços
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative grid gap-4"
            >
              <div className="rounded-[2rem] bg-white/85 p-6 shadow-xl ring-1 ring-white/70 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-gradient-to-br from-neutral-50 to-rose-50 p-4 ring-1 ring-neutral-200"
                    >
                      <p className="text-2xl font-bold">{item.value}</p>
                      <p className="mt-1 text-sm text-neutral-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">Destaque</p>
                  <h2 className="mt-3 text-2xl font-semibold">Confiança, clareza e organização</h2>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">
                    Estrutura ideal para uma fábrica que quer parecer séria, vender melhor e abrir espaço para crescer com processos mais inteligentes.
                  </p>
                </div>

                <div className="rounded-[2rem] bg-gradient-to-br from-rose-500 via-fuchsia-500 to-orange-400 p-8 text-white shadow-xl">
                  <Shirt size={28} />
                  <h3 className="mt-6 text-xl font-semibold">Visual moderno</h3>
                  <p className="mt-3 text-sm leading-6 text-white/90">
                    Um design com mais valor percebido, mais presença e menos cara de protótipo abandonado num domingo à noite.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeader
            eyebrow="Diferenciais"
            title="Por que um site bonito ajuda a fábrica a vender melhor"
            description="Além de passar confiança, um visual bem cuidado valoriza o serviço, melhora a percepção de qualidade e deixa a marca mais memorável. Sim, aparência importa. A internet é superficial desse jeito."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <BadgeCheck size={22} />,
                title: 'Mais credibilidade',
                text: 'Um visual profissional aumenta a confiança de quem está conhecendo a fábrica pela primeira vez.',
              },
              {
                icon: <Scissors size={22} />,
                title: 'Serviços mais claros',
                text: 'Cada serviço fica melhor apresentado, o que ajuda o cliente a entender valor e tomar decisão.',
              },
              {
                icon: <Sparkles size={22} />,
                title: 'Base pronta para evoluir',
                text: 'O site já nasce com estrutura para receber formulário, banco de dados e análises futuras.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-neutral-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-orange-100 text-rose-600">
                  {item.icon}
                </div>
                <p className="mt-5 text-lg font-semibold tracking-tight">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </>
    );
  }

  function ServicesPage() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow="Serviços"
          title="Soluções apresentadas de forma mais bonita e valorizada"
          description="Aqui os serviços ficam mais elegantes visualmente, com mais respiro, mais hierarquia e uma leitura bem mais agradável no celular. Como deveria ser desde o começo, francamente."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-neutral-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{service.description}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-orange-100 text-rose-600">
                  <Scissors size={20} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    );
  }

  function AboutPage() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow="Sobre"
          title="Uma apresentação mais humana e profissional da fábrica"
          description="Essa página reforça confiança, mostra os valores do negócio e ajuda a marca a parecer mais premium. Porque cliente gosta de sentir que está contratando alguém organizado e não um chute coletivo."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-neutral-200">
            <h3 className="text-2xl font-semibold">Quem somos</h3>
            <p className="mt-4 leading-7 text-neutral-600">
              Somos uma fábrica de costura focada em qualidade, compromisso com prazos e atenção aos detalhes em cada etapa da produção.
              Atendemos pedidos sob demanda, produção em lote, uniformes e desenvolvimento de peças piloto para diferentes tipos de cliente.
            </p>
            <p className="mt-4 leading-7 text-neutral-600">
              Nosso objetivo é entregar peças com acabamento profissional, comunicação clara e um processo organizado do início ao fim.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">Valores</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-300">
                <li>• Qualidade em cada peça</li>
                <li>• Transparência no atendimento</li>
                <li>• Compromisso com prazo</li>
                <li>• Organização na produção</li>
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-neutral-200">
              <h3 className="text-2xl font-semibold">Para quem atendemos</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
                <li>• Pequenas marcas de roupa</li>
                <li>• Empresas e equipes</li>
                <li>• Escolas e eventos</li>
                <li>• Clientes com produção personalizada</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-neutral-200"
            >
              <p className="text-sm leading-6 text-neutral-600">“{item.text}”</p>
              <p className="mt-4 font-semibold">{item.name}</p>
            </motion.article>
          ))}
        </div>
      </section>
    );
  }

  function GalleryPage() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow="Galeria"
          title="Espaço visual mais bonito para mostrar a produção"
          description="Fotos boas ajudam demais nesse tipo de negócio. Acabamento, tecido, padrão e organização comunicam valor antes mesmo da primeira mensagem."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-neutral-200"
            >
              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-neutral-200 via-rose-100 to-orange-100 text-sm text-neutral-500">
                Espaço para foto real
              </div>
              <div className="p-5">
                <p className="font-medium">{item}</p>
                <p className="mt-1 text-sm text-neutral-500">Exemplo de produção e acabamento</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  function ContactPage() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Contato"
              title="Página pronta para captar pedidos com mais presença visual"
              description="Na próxima fase, esse formulário vai conversar com o back-end, validar dados e gravar tudo no banco. Finalmente o site fica bonito e útil ao mesmo tempo. Conceito revolucionário."
            />

            <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">Canais de atendimento</h3>
              <div className="mt-5 space-y-4 text-sm text-neutral-300">
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <p>WhatsApp: (11) 99999-9999</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <p>E-mail: contato@ateliecostura.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck size={16} />
                  <p>Horário: Segunda a Sexta, das 8h às 18h</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  <p>São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-neutral-200">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
              />
              <input
                type="text"
                placeholder="Telefone"
                className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
              />
              <input
                type="text"
                placeholder="Empresa ou marca"
                className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
              />
              <select className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500">
                <option>Tipo de serviço</option>
                <option>Confecção sob demanda</option>
                <option>Uniformes</option>
                <option>Produção em lote</option>
                <option>Pilotagem</option>
                <option>Ajustes</option>
              </select>
              <textarea
                placeholder="Descreva o pedido"
                rows={6}
                className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-300 transition hover:-translate-y-0.5"
              >
                Enviar solicitação
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  function renderPage() {
    switch (currentPage) {
      case 'servicos':
        return <ServicesPage />;
      case 'sobre':
        return <AboutPage />;
      case 'galeria':
        return <GalleryPage />;
      case 'contato':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7f8_0%,#fffdf9_35%,#fafafa_100%)] text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-orange-500 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
                Ateliê Costura & Produção
              </p>
              <p className="text-sm text-neutral-500">Confecção com qualidade, prazo e cuidado</p>
            </div>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              {navItems.map((item) => (
                <NavButton key={item.id} id={item.id} label={item.label} />
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
                <NavButton key={item.id} id={item.id} label={item.label} mobile />
              ))}
            </nav>
          ) : null}
        </div>
      </header>

      <section className="border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Página atual</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">{pageTitle[currentPage]}</h1>
          </div>

          <button
            onClick={() => goToPage('contato')}
            className="hidden items-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-300 transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Pedir orçamento
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {renderPage()}

      <footer className="border-t border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Ateliê Costura & Produção</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Site institucional com base pronta para crescer junto com o negócio e receber integrações futuras com banco de dados, pedidos e análises.
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
    </main>
  );
}
