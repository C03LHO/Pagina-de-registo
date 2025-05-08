# Projeto
# ServiçosApp - Sistema de Registro de Clientes e Trabalhadores

## 📋 Sobre o Projeto

ServiçosApp é uma plataforma web responsiva para conectar clientes com trabalhadores autônomos e prestadores de serviços. O sistema permite que usuários se registrem como clientes ou trabalhadores, sendo que os trabalhadores precisam especificar quais serviços oferecem a partir de uma lista pré-definida de categorias.

## ✨ Funcionalidades

### Para Todos os Usuários
- Interface responsiva que se adapta a diferentes dispositivos
- Registro com informações pessoais básicas
- Upload de foto de perfil
- Preenchimento de endereço (cidade e bairro)

### Específico para Trabalhadores
- Seleção de uma ou mais funções/serviços a partir de uma lista extensa
- Impossibilidade de adicionar serviços personalizados fora da lista pré-definida
- Campo para descrição da experiência e qualificações
- Validação obrigatória para garantir que pelo menos um serviço seja selecionado

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (com flexbox e animações)
- Design responsivo
- Validação de formulários no lado do cliente

## 🔧 Estrutura do Projeto

```
meu-projeto/
│
├── index.html          # Página principal de registro
├── css/
│   └── style.css       # Estilos e layout da aplicação
└── README.md           # Este arquivo
```

## 📝 Requisitos para Execução

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar fontes Google)

## 🔍 Principais Componentes do Projeto

### Formulário de Registro
O sistema apresenta um formulário dividido em duas modalidades: Cliente e Trabalhador, selecionáveis através de um toggle na parte superior.

### Sistema de Seleção de Serviços
Para trabalhadores, há um sistema de busca e seleção de serviços com:
- Campo de busca com filtro em tempo real
- Lista de serviços categorizados (mais de 100 opções)
- Adição e remoção dinâmica de serviços selecionados
- Validação para garantir seleção mínima de um serviço

### Upload de Foto
Interface amigável para upload de foto de perfil, com:
- Preview visual
- Suporte a diferentes formatos de imagem
- Feedback visual durante o processo

## 📦 Funcionalidades Avançadas

### Máscaras de Entrada
- Formatação automática de CPF (000.000.000-00)
- Formatação automática de telefone celular ((XX) XXXXX-XXXX)

### Efeitos Visuais
- Ripple effect nos botões principais 
- Animações de transição entre estados
- Feedback visual para validação

### Controle de Serviços
- Impossibilidade de criar serviços personalizados
- Validação para evitar serviços duplicados
- Interface visual clara para serviços já selecionados

## 🔒 Validação de Dados

### Cliente
- Nome completo (obrigatório)
- CPF válido (obrigatório, com máscara)
- Celular (obrigatório, com máscara)
- Cidade e Bairro (obrigatórios)

### Trabalhador
- Todos os campos do cliente
- Pelo menos um serviço selecionado (obrigatório)
- Descrição do trabalhador (opcional)

## 🛠️ Personalização

### Adicionar Novos Serviços
Para adicionar novos serviços à lista disponível, edite o array `availableServices` no arquivo `index.html`:

```javascript
const availableServices = [
  // Adicione novos serviços aqui
  "Novo Serviço",
  ...
];
```

### Modificar Estilos
Os estilos podem ser modificados no arquivo `style.css`. As principais variáveis de cores estão definidas em `:root` para facilitar a personalização:

```css
:root {
  --primary-color: #3000BF;
  --primary-light: #4C2AD9;
  /* outras variáveis */
}
```

## 🔮 Próximos Passos (Roadmap)

- [ ] Integração com backend para persistência de dados
- [ ] Sistema de autenticação
- [ ] Página de busca de serviços para clientes
- [ ] Perfis detalhados de trabalhadores
- [ ] Sistema de avaliação e feedback
- [ ] Geolocalização para serviços próximos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.