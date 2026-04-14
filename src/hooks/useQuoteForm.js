import { useState } from "react";

const initialFormData = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  tipo_servico: "",
  descricao: "",
};

export function useQuoteForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMensagem("");

    try {
      const response = await fetch(`${apiUrl}/pedido`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar solicitação");
      }

      await response.json();

      setMensagem("Solicitação enviada com sucesso!");
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      setMensagem("Não foi possível enviar a solicitação.");
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    loading,
    mensagem,
    handleChange,
    handleSubmit,
  };
}