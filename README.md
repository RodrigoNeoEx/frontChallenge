
# 📦 Projeto: CEP Challenge

Este é um desafio técnico desenvolvido com **React 18**, onde o objetivo é criar uma aplicação para consulta de CEPs utilizando a API do ViaCEP, com persistência local, cache para otimizar requisições e histórico de buscas.

Quer testar o projeto? Click no Link ao Lado [frontChallenge]([https://github.com/RodrigoNeoE](https://front-challenge-9gxubzdcc-rodrigoneoexs-projects.vercel.app/).  
---

## 📂 Estrutura do Projeto

```
src
├── App.tsx
├── components
│   ├── header
│   │   └── Header.tsx
│   ├── hero
│   │   └── Hero.tsx
│   ├── historyTable
│   │   └── HistoryTable.tsx
│   ├── inputSection
│   │   └── InputSection.tsx
│   └── table
│       └── Table.tsx
├── hooks
│   ├── useCepCache.ts
│   └── useHydrateCeps.tsx
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── redux
│   ├── slices
│   │   └── cepSlice.ts
│   └── store
│       └── store.ts
├── reportWebVitals.ts
└── utils
    ├── axios.ts
    ├── formatCep.ts
    ├── normalizeCEP.ts
    ├── saveAdress.ts
    └── validateAndFetchCep.ts
```

---

## 🛠️ Tecnologias Utilizadas e Motivos

### ⚛️ React 18
- Framework principal da aplicação.
- Escolhido por sua flexibilidade, componentização e alta produtividade no desenvolvimento.

---

### 🎨 Tailwind CSS
- Framework de estilos utilitário.
- Motivo: Permite criar layouts responsivos e modernos de forma rápida, com classes semânticas e manutenção simplificada.

---

### 🗃️ Redux Toolkit
- Gerenciador de estado global.
- Motivo: Facilitou o gerenciamento do histórico de CEPs e a hidratação inicial com dados do `localStorage`. Além disso, garante consistência entre diferentes componentes que consomem os mesmos dados.

---

### 🚀 TypeScript
- Superset do JavaScript.
- Motivo: Tipagem estática para maior segurança, previsibilidade e melhor experiência de desenvolvimento (autocompletes, validações).

---

### 🌐 Axios
- Cliente HTTP.
- Motivo: Facilita a comunicação com a API do ViaCEP, com suporte nativo a interceptors e configuração centralizada (ex.: `axios.ts`).

---

### 📥 Headless UI
- Biblioteca de componentes acessíveis e desprovidos de estilo.
- Motivo: Usada para o `Listbox` (select do histórico de pesquisas), garantindo navegação por teclado e boa acessibilidade (ARIA).

---

### 📄 ESLint + Prettier
- Ferramentas de linting e formatação.
- Motivo: Garantir consistência de código e evitar problemas comuns (ex.: regras de hooks, formatação padronizada).

---

### 🧰 Custom Hooks
- `useCepCache`: Hook responsável por centralizar o cache local de CEPs.
- `useHydrateCeps`: Hook que hidrata o Redux com o histórico salvo no `localStorage`.
- Motivo: Separação clara de responsabilidades e reuso de lógica em múltiplos componentes.

---

### 📊 LocalStorage
- Armazenamento persistente no navegador.
- Motivo: Necessário para persistir o histórico de pesquisas, mesmo após o usuário fechar a página.

---

### 🌐 API ViaCEP
- Serviço gratuito para consulta de endereços a partir do CEP.
- URL Base: `https://viacep.com.br/ws/`

---

## 💡 Funcionalidades Implementadas

✅ Campo de entrada para o CEP.  
✅ Consulta à API ViaCEP.  
✅ Preenchimento automático do endereço.  
✅ Validação de CEP duplicado.  
✅ Salvamento no histórico com persistência local.  
✅ Histórico exibido em select dinâmico.  
✅ Exibição detalhada do endereço salvo em tabela.  
✅ Cache local para evitar requisições desnecessárias.  
✅ Responsividade (Mobile First).

---

## 📱 Mobile First

O layout foi construído inicialmente pensando em dispositivos móveis, garantindo boa usabilidade em telas pequenas. Ajustes para telas maiores foram aplicados com breakpoints do Tailwind.

---

## 🚀 Como Executar

```bash
# Clonar o repositório
git clone https://github.com/RodrigoNeoEx/frontChallenge.git

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 📮 Contato

Projeto desenvolvido por [Rodrigo NeoEx](https://github.com/RodrigoNeoEx).  
Dúvidas ou sugestões? Abra uma issue no repositório.
