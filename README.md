<br />
<div align="center">

<h1 align="center">Listagem de usuários</h1>

  <p align="center">

  </p>
  <a href="https://users-list-guiwustro.vercel.app/">
Link do projeto</a>
</div>

## Sobre o projeto

É uma aplicação que faz a listagem de usuários, mostrando seus detalhes,
utilizando a API RandomUser, sendo realizado em React com estilização feita com
Styled Components.

No processo de desenvolvimento, para trazer uma solução a listagem de usuários,
pensei em duas alternativas, uma sendo uma tabela com paginação, alternativa que
estou habituado no meu dia-a-dia, criando dashboards, e a outra, a qual
executei, foi de fazer a listagem com cards, juntamente com um scroll infinito,
uma funcionalidade que nunca tinha feito, e para faze-la, utilizei uma
funcionalidade nativa do Javascript, o InsersectionObserver, o qual consegue
observar quais são os elementos visíveis ao usuário. No caso, nessa aplicação,
criei uma Tag Li e fiz a verificação se está sendo visualizado, caso esteja, é
feito uma nova requisição à API, adicionando mais 20 usuários.

Além disso, foi criado um botão dentro dos "Cartões" dos usuários, em que mostra
mais informações dos usuários, que além de fechar pelo botão, adicionei a
funcionalidade dele fechar ao clicar fora.

Para organização do projeto, estruturei o projeto da seguinte forma:

```
    ├── src
    │   ├── @types          # Interfaces/Types
    │   ├── components      # Componentes da aplicação
    │   ├── assets          # Imagens
    │   ├── contexts        # Gerenciamento dos estados globais
    │   ├── routes          # Organização das rotas(útil caso o projeto fosse ampliado)
    │   ├── services        # Instancia da API utilizando Axios
    │   ├── styles          # Reset CSS Global, Tema e Tipografias(estilizações)
    │   └── pages           # Páginas da aplicação (útil caso o projeto fosse ampliado)
```

De modo geral, não tive dificuldades no desenvolvimento desse projeto, visto que
utilizei bibliotecas que estou muito familiarizado, tanto o React, quanto o
styled-components. O meu maior desafio mesmo foi pensar em como eu apresentaria
essas informações, na questão do layout, se faria uma tabela ou cartões.Na
disposição dos cards primeiramente, utilizei um display flex, com flex wrap, mas
não gostei do espaçamento em certas telas, portanto, para corrigir isso optei
pela utilização do display grid alterando o número de colunas de acordo com o
tamanho da tela. E a novidade para mim nesse projeto, foi a implementação do
Scroll infinito, que acabei aprendendo uma funcionalidade nova nativa no
Javascript, o IntersectionObserver.

## Tecnologias utilizadas

O projeto foi realizado em React e as principais bibliotecas utilizadas foram:

- Axios;
- Styled components;

## Como iniciar o projeto

Para iniciar o projeto, siga os comandos abaixo, lembrando que é necessário ter
NodeJS instalado na máquina. O utilizado para inicialização foi a versão 18.15.0

```
yarn install
```

```
yarn dev
```

## Features

- [x] Listagem dos usuários ;
- [x] Scroll infinito;
- [x] Modal mostrando informações detalhados dos usuários;
- [x] Interface responsiva;
- [x] Filtragem por gênero;
