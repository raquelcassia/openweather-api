# [Zé Delivery]  QA Challenge
>Desafio de Testes de [Open Weather API](https://openweathermap.org/api) 
---

### 1. Identificar fluxos críticos / 2. Teste de automação de IU
<br/>

 :triangular_flag_on_post:   Etapas anteriores do desafio poderão ser visualizadas através do repositorio [zedelivery-challenge](https://github.com/raquelcassia/zedelivery-challenge).

-----------------------

### 3. Teste de automação de API


Repositório com o desafio técnico de testes automatizados para o site [Open Weather Map](https://openweathermap.org/current) utilizando:


  - JavaScript
  - Cypress

-----------------------

## Tabela de Contexto

> Índice `README`.
  - [Pré Requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configuração](#configuração)
  - [Como Testar](#como-testar)
  - [Documentações](#documentações)  
  - [Suporte](#suporte)


-----------------------

### Pré Requisitos

- [node e npm](https://nodejs.org/en/)
- [vscode ou outra IDE](https://code.visualstudio.com/download)
- [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

-----------------------

### Instalação

> Clonar projeto
- Clonar este repositório usando _ssh_ ou _https_.

> exemplo:
```js
$ git clone https://github.com/raquelcassia/openweather-api.git
```

- Através de um terminal, navegue até o diretório do projeto e instale as dependências npm com o comando:

```js
$ npm install
```
-----------------------

### Configuração

- Para usar a API OpenweatherMap, você precisa obter uma chave de API. Inscreva-se [aqui](https://openweathermap.org/api) e obtenha sua chave de acesso. 


- Localizar o arquivo na raiz do projeto chamado _cypress.env.json_ e alterar o valor da variável `API_KEY` para a chave obtida no passo anterior:

```jsone
{
    "API_KEY": "INSERIR API KEY"
}
```

**Nota Importante:** Isso foi feito para simular uma possível _"não exposição"_ para o tratamento quanto a dados sensíveis. 

-----------------------

### Como testar

> Para rodar os testes no modo interativo do cypress:
```js
$ npx cypress open
```

-----------------------

### Documentações

Para documentação de palavras-chave individuais, consulte o seguinte:

 - [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress)
 - [Documentação API](https://openweathermap.org/current)
 
-----------------------

### Suporte

- Linkedin: <a href="https://www.linkedin.com/in/raqueldecassiasc/" target="_blank">**Raquel de Cássia**</a> :ghost:

- E-mail: **rcassia_scarvalho@hotmail.com**


-----------------------
