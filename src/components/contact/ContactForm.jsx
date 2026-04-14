import { ArrowRight } from "lucide-react";
import { useQuoteForm } from "../../hooks/useQuoteForm";

export default function ContactForm() {
  const { formData, loading, mensagem, handleChange, handleSubmit } = useQuoteForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-neutral-200"
    >
      <div className="grid gap-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
        />

        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
        />

        <input
          type="text"
          name="empresa"
          placeholder="Empresa ou marca"
          value={formData.empresa}
          onChange={handleChange}
          className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
        />

        <select
          name="tipo_servico"
          value={formData.tipo_servico}
          onChange={handleChange}
          className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
        >
          <option value="">Tipo de serviço</option>
          <option value="Confecção sob demanda">Confecção sob demanda</option>
          <option value="Uniformes">Uniformes</option>
          <option value="Produção em lote">Produção em lote</option>
          <option value="Pilotagem">Pilotagem</option>
          <option value="Ajustes">Ajustes</option>
        </select>

        <textarea
          name="descricao"
          placeholder="Descreva o pedido"
          rows={6}
          value={formData.descricao}
          onChange={handleChange}
          className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-rose-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-300 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Enviando..." : "Enviar solicitação"}
          <ArrowRight size={16} />
        </button>

        {mensagem && <p className="text-sm text-neutral-700">{mensagem}</p>}
      </div>
    </form>
  );
}