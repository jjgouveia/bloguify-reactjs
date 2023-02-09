# Projeto - Bloguify

## 🔨 Desenvolvimento

## Proposta:
Desenvolver um front-end para  atender às necessidades de uma API RESTful.
Os seguintes endpoints estão disponíveis:

### Listagem de posts: 
    https://jsonplaceholder.typicode.com/posts 
### Listagem de comentários de um post:
    https://jsonplaceholder.typicode.com/posts/[ID]/comments 
### Listagem de usuários: 
    https://jsonplaceholder.typicode.com/users 
### Detalhes de um usuário: 
    https://jsonplaceholder.typicode.com/users/[ID] 

### Requisitos:

* No cenário proposto, a interface deve exibir posts de um blog com paginação tendo o limite de 4 registros por vez;
* Ao clicar em um post os comentários associados devem ser exibidos;
* Deve conter uma interface para exibir todos os usuários contendo paginação  com limite de 4 registros por vez;
* Ao clicar em um usuário deve exibir os seus detalhes.


## Implementação:

Desenvolvi um blog com login, feed e tela de usuários baseados no conceito de Material UI.
A aplicação conta com modais específicos para visualização tanto dos comentários quanto para os detalhes do usuário.
A tela de login - implementação extra - conta com call-to-action no botão de login e validação dos campos através do <code>React Hook Form</code>.
Caso o usuário escolha permanecer logado na tela de login, ele será automaticamente redirecionado para o Feed ao acessar as rotas "/" ou "/login".

## 💻 Tecnologias e Metodologias utilizadas

* ReactJS
* Material UI
* React Hook Form
* Hooks Personalizados
* React Awesome Reveal
* Totalmente responsivo
* Lord Icons

## 🛠 Instalação local

Clone o projeto:

```bash
  git clone git@github.com:jjgouveia/bloguify-reactjs.git
```

Vá até a pasta do projeto:

```bash
  cd bloguify-reactjs
```

📍 Instale as dependências do projeto:

```bash
    npm run install
```

📍 Inicie a aplicação:
   
```bash
  npm run start
```
Ao final, acesse o localhost indicado.
