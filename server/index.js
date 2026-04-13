const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://site-fabrica-costura-inky.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API da fábrica de costura rodando");
});

app.post("/pedido", async (req, res) => {
  const { nome, email, telefone, empresa, tipo_servico, descricao } = req.body;

  if (!nome?.trim() || !email?.trim() || !tipo_servico?.trim()) {
    return res.status(400).json({
      error: "Nome, e-mail e tipo de serviço são obrigatórios",
    });
  }

  let client;

  try {
    client = await pool.connect();
    await client.query("BEGIN");

    const cliente = await client.query(
      "INSERT INTO clientes (nome, email, telefone, empresa) VALUES ($1, $2, $3, $4) RETURNING id",
      [
        nome.trim(),
        email.trim(),
        telefone?.trim() || null,
        empresa?.trim() || null,
      ]
    );

    const cliente_id = cliente.rows[0].id;

    await client.query(
      "INSERT INTO pedidos (cliente_id, tipo_servico, descricao) VALUES ($1, $2, $3)",
      [
        cliente_id,
        tipo_servico.trim(),
        descricao?.trim() || null,
      ]
    );

    await client.query("COMMIT");

    res.status(201).json({ message: "Pedido registrado com sucesso" });
  } catch (err) {
    if (client) {
      await client.query("ROLLBACK");
    }
    console.error("Erro ao registrar pedido:", err);
    res.status(500).json({ error: "Erro ao registrar pedido" });
  } finally {
    if (client) {
      client.release();
    }
  }
});

app.get("/dashboard", async (req, res) => {
  try {
    const totalPedidos = await pool.query(
      "SELECT COUNT(*) AS total FROM pedidos"
    );

    const servicos = await pool.query(`
      SELECT tipo_servico, COUNT(*) AS total
      FROM pedidos
      GROUP BY tipo_servico
      ORDER BY total DESC
    `);

    res.json({
      total_pedidos: Number(totalPedidos.rows[0].total),
      servicos: servicos.rows.map((item) => ({
        tipo_servico: item.tipo_servico,
        total: Number(item.total),
      })),
    });
  } catch (err) {
    console.error("Erro no dashboard:", err);
    res.status(500).json({ error: "Erro no dashboard" });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});