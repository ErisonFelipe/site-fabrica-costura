import { ArrowRight } from "lucide-react";
import { useQuoteForm } from "../../hooks/useQuoteForm";

function getInputClass(error) {
  return `rounded-2xl border px-4 py-3 outline-none transition ${
    error
      ? "border-red-500 bg-red-50 focus:border-red-500"
      : "border-neutral-300 focus:border-rose-500"
  }`;
}

export default function ContactForm() {
  const {
    formData,
    errors,
    loading,
    mensagem,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useQuoteForm();

  const isSuccess = mensagem === "Solicitação enviada com sucesso!";
  const isError =
    mensagem && mensagem !== "Solicitação enviada com sucesso!";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-neutral-200"
      noValidate
    >
      <div className="grid gap-4">
        <div>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass(errors.nome)}
          />
          {errors.nome ? (
            <p className="mt-2 text-sm text-red-600">{errors.nome}</p>
          ) : null}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass(errors.email)}
          />
          {errors.email ? (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <input
            type="text"
            name="telefone"
            placeholder="(11) 99999-9999"
            value={formData.telefone}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={15}
            className={getInputClass(errors.telefone)}
          />
          {errors.telefone ? (
            <p className="mt-2 text-sm text-red-600">{errors.telefone}</p>
          ) : null}
        </div>

        <div>
          <input
            type="text"
            name="empresa"
            placeholder="Empresa ou marca"
            value={formData.empresa}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass(errors.empresa)}
          />
        </div>

        <div>
          <select
            name="tipo_servico"
            value={formData.tipo_servico}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass(errors.tipo_servico)}
          >
            <option value="">Tipo de serviço</option>
            <option value="Confecção sob demanda">Confecção sob demanda</option>
            <option value="Uniformes">Uniformes</option>
            <option value="Produção em lote">Produção em lote</option>
            <option value="Pilotagem">Pilotagem</option>
            <option value="Ajustes">Ajustes</option>
          </select>
          {errors.tipo_servico ? (
            <p className="mt-2 text-sm text-red-600">{errors.tipo_servico}</p>
          ) : null}
        </div>

        <div>
          <textarea
            name="descricao"
            placeholder="Descreva o pedido"
            rows={6}
            value={formData.descricao}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass(errors.descricao)}
          />
          {errors.descricao ? (
            <p className="mt-2 text-sm text-red-600">{errors.descricao}</p>
          ) : null}
        </div>

        {mensagem ? (
          <p
            className={`rounded-2xl px-4 py-3 text-sm ${
              isSuccess
                ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                : isError
                  ? "bg-red-50 text-red-700 ring-1 ring-red-200"
                  : "text-neutral-700"
            }`}
          >
            {mensagem}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-300 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Enviando..." : "Enviar solicitação"}
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}