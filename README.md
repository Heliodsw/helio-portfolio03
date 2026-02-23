# Portfólio - Hélio do Vale Silva

Portfólio profissional moderno e responsivo para Hélio do Vale Silva, desenvolvedor backend especializado em Node.js, Express.js e MySQL.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **TailwindCSS** - Framework CSS utilitário
- **JavaScript ES6+** - Linguagem de programação

## 📁 Estrutura do Projeto

```
helio-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegação e menu
│   │   ├── Hero.jsx            # Seção inicial
│   │   ├── About.jsx           # Seção sobre
│   │   ├── Skills.jsx          # Habilidades técnicas
│   │   ├── Projects.jsx        # Projetos em destaque
│   │   ├── Experience.jsx      # Experiência profissional
│   │   ├── Contact.jsx         # Formulário de contato
│   │   └── Footer.jsx          # Rodapé
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Ponto de entrada
│   └── index.css               # Estilos globais
├── public/                     # Arquivos estáticos
├── index.html                  # HTML principal
├── package.json                # Dependências do projeto
├── vite.config.js              # Configuração do Vite
├── tailwind.config.js          # Configuração do TailwindCSS
├── postcss.config.js           # Configuração do PostCSS
└── README.md                   # Este arquivo
```

## 📦 Instalação

1. **Clonar o repositório** (se aplicável):
```bash
git clone <seu-repositorio>
cd helio-portfolio
```

2. **Instalar dependências**:
```bash
npm install
```

ou com yarn:
```bash
yarn install
```

ou com pnpm:
```bash
pnpm install
```

## 🏃 Como Executar

### Modo de Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Isso criará uma pasta `dist` com os arquivos otimizados para produção.

### Preview da Build

```bash
npm run preview
```

## 🎨 Customização

### Cores
As cores principais podem ser customizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: '#1e40af',
  secondary: '#0f172a',
  accent: '#3b82f6',
}
```

### Conteúdo
Todos os textos, informações de contato e dados profissionais estão nos componentes individuais em `src/components/`.

### Links Sociais
Atualize os links de GitHub, LinkedIn e Email nos componentes:
- `Hero.jsx`
- `Footer.jsx`
- `Contact.jsx`

## 📝 Seções do Portfólio

- **Header** - Navegação fixa com menu responsivo
- **Hero** - Apresentação inicial com CTA
- **About** - Informações pessoais e profissionais
- **Skills** - Habilidades técnicas com barras de progresso
- **Projects** - Projetos em destaque com detalhes
- **Experience** - Timeline de experiência profissional
- **Contact** - Formulário de contato e informações
- **Footer** - Links rápidos e redes sociais

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build para produção |
| `npm run preview` | Visualiza a build |

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para adaptá-lo conforme necessário.

## 👤 Autor

**Hélio do Vale Silva**
- Email: helio2312.lrs@gmail.com
- Telefone: (11) 98875-0789
- Localização: São Paulo – SP, Brasil

---

Desenvolvido com ❤️ usando React + TailwindCSS
