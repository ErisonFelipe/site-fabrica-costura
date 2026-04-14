# Sistema Web para Fábrica de Costura

Projeto completo desenvolvido com foco em **Front-End, Back-End, Banco de Dados e BI**, simulando um sistema real para gestão de pedidos de uma fábrica de costura.

O sistema permite que clientes enviem solicitações de orçamento através do site, com os dados sendo processados por uma API e armazenados em um banco PostgreSQL na nuvem.

---

# Demonstração

Frontend (site):
(https://site-fabrica-costura-inky.vercel.app/)

Backend (API):
(https://site-fabrica-costura-1.onrender.com/)

---

# Arquitetura do Projeto

Frontend (React)
↓
Backend (Node.js + Express)
↓
Banco de Dados (PostgreSQL - Render)

---

# Tecnologias utilizadas

### Front-End

* React
* Vite
* Tailwind CSS
* Framer Motion
* Lucide Icons

### Back-End

* Node.js
* Express
* CORS
* Dotenv

### Banco de Dados

* PostgreSQL (Render)
* pg (node-postgres)

### Deploy

* Vercel (Frontend)
* Render (Backend + Banco)

### Versionamento

* Git
* GitHub

---

# Funcionalidades implementadas

## Front-End

* Refatoração da estrutura do projeto para separar componentes, páginas, dados e hooks
* Implementação de menu mobile com animação e navegação lateral
* Adição de botão flutuante de WhatsApp
* Aplicação de máscara no campo de telefone
* Criação de validações visuais no formulário
* Melhoria do rodapé com navegação, serviços e contato

## Back-End

* Integração do formulário com a API hospedada no Render
* API REST com Express
* Rota GET `/` para status
* Rota POST `/pedido` para cadastro
* Integração com PostgreSQL
* Tratamento de erros
* Uso de variáveis de ambiente

## Banco de Dados

*  Estrutura inicial planejada para evolução do banco com foco em:

* clientes
* produtos
* estoque
* pedidos
* vendas
* movimentações
* relatórios e dashboard BI

---

# Estrutura do projeto

```bash
site-costura
│
├── src                # Frontend React
├── server             # Backend Node
│   ├── index.js
│   ├── db.js
│   └── .env
│
├── package.json
└── README.md
```

---

# Como rodar o projeto localmente

### 1. Clonar repositório

```bash
git clone https://github.com/seuusuario/site-fabrica-costura.git
cd site-fabrica-costura
```

### 2. Instalar dependências

Frontend:

```bash
npm install
```

Backend:

```bash
cd server
npm install
```

---

### 3. Configurar variáveis de ambiente

#### Backend (`server/.env`)

```env
DATABASE_URL=sua_string_de_conexao_postgres
PORT=3000
```

#### Frontend (`.env`)

```env
VITE_API_URL=http://localhost:3000
```

---

### 4. Rodar aplicação

Backend:

```bash
cd server
node index.js
```

Frontend:

```bash
npm run dev
```

---

# Testando a API

### Rota de teste

```bash
GET /
```

### Enviar pedido

```bash
POST /pedido
```

Exemplo JSON:

```json
{
  "nome": "Erison Felipe",
  "email": "teste@email.com",
  "telefone": "11999999999",
  "empresa": "Costura Exemplo",
  "tipo_servico": "Confecção sob demanda",
  "descricao": "Pedido de teste"
}
```

---

# Objetivo do projeto

Este projeto foi desenvolvido com foco em evolução nas áreas de:

* Desenvolvimento Web
* Banco de Dados (DBA)
* Engenharia de Dados
* Business Intelligence

A proposta é evoluir o sistema para um modelo completo de gestão de pedidos, produção e análise de dados para pequenos negócios.

---

# Próximas melhorias

* Dashboard administrativo (React)
* Listagem de pedidos
* Filtros e status de produção
* Dashboard BI (Power BI / Metabase)
* Autenticação de usuários
* Deploy completo em produção

---

# Autor

Erison Felipe

Foco profissional:

* Banco de Dados
* Business Intelligence
* Desenvolvimento de sistemas
* Soluções para pequenos negócios
