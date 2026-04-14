import { useState } from "react";

const initialFormData = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  tipo_servico: "",
  descricao: "",
};

const initialErrors = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  tipo_servico: "",
  descricao: "",
};

function maskPhone(value) {
  const onlyNumbers = value.replace(/\D/g, "").slice(0, 11);

  if (onlyNumbers.length <= 2) {
    return onlyNumbers;
  }

  if (onlyNumbers.length <= 7) {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
  }

  if (onlyNumbers.length <= 10) {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 6)}-${onlyNumbers.slice(6)}`;
  }

  return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7)}`;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  const onlyNumbers = phone.replace(/\D/g, "");
  return onlyNumbers.length === 10 || onlyNumbers.length === 11;
}

function validateField(name, value) {
  switch (name) {
    case "nome":
      if (!value.trim()) return "Informe seu nome.";
      if (value.trim().length < 3) return "O nome deve ter pelo menos 3 caracteres.";
      return "";

    case "email":
      if (!value.trim()) return "Informe seu e-mail.";
      if (!validateEmail(value)) return "Digite um e-mail válido.";
      return "";

    case "telefone":
      if (!value.trim()) return "Informe seu telefone.";
      if (!validatePhone(value)) return "Digite um telefone válido com DDD.";
      return "";

    case "tipo_servico":
      if (!value.trim()) return "Selecione um tipo de serviço.";
      return "";

    case "descricao":
      if (!value.trim()) return "Descreva o pedido.";
      if (value.trim().length < 10) return "A descrição deve ter pelo menos 10 caracteres.";
      return "";

    default:
      return "";
  }
}

function validateForm(formData) {
  const newErrors = {};

  Object.keys(initialErrors).forEach((field) => {
    newErrors[field] = validateField(field, formData[field]);
  });

  return newErrors;
}

export function useQuoteForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  function handleChange(event) {
    const { name, value } = event.target;

    let formattedValue = value;

    if (name === "telefone") {
      formattedValue = maskPhone(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, formattedValue),
    }));
  }

  function handleBlur(event) {
    const { name, value } = event.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMensagem("");

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    const hasErrors = Object.values(formErrors).some((error) => error !== "");

    if (hasErrors) {
      setMensagem("Corrija os campos destacados antes de enviar.");
      return;
    }

    setLoading(true);

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
      setErrors(initialErrors);
    } catch (error) {
      console.error(error);
      setMensagem("Não foi possível enviar a solicitação.");
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    errors,
    loading,
    mensagem,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}