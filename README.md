# Este é um teste técnico para Toro

## Architecture

- Express
- Jest
- Typescript
- Node
- Dynamoose
- Joi
- Husky
- Lint Staged

### <strong>Árvore do código fonte:</strong>

```
  src
  |-- @types
  |-- config
  |-- models
  |-- modules
  |-- shared
  |-- server.ts
  |-- index.ts
```

<br/>

## Instalação ambiente de desenvolvimento

Requisitos para rodar o projeto nodeJS >= 14. Clonar repositório, entrar na pasta e instalar suas dependências com o comando `yarn` ou `npm install` e copiar o arquivo `.env.example` para `.env` configurando as variáveis de acordo com o ambiente.

<br/>

## Instalação usando docker compose

Rodar na pasta raiz do projeto o comando `docker-compose up`.

> Obs: Para entrar na documentação da api, após iniciar o servidor acessar a rota `/docs`.


## Scripts

<details>
  <summary>
    <strong style="font-size: 15px;">Testes</strong>
  </summary>

  <br/>

  <b>Rodar testes</b>

  > `npm test`

  <b>Rodar cobertura de testes</b>

  > `npm run test:ci`

  <b>Rodar testes verbosos</b>

  > `npm run test:verbose`

  <b>Rodar testes unitários</b>

  > `npm run test:unit`

  <b>Rodar testes de integração `(Obs: não tive tempo para desenvolver testes de integração)`</b>

  > `npm run test:integration`

  <b>Rodar testes de arquigos staged</b>

  > `npm run test:staged`
</details>

<br/>

<details>
  <summary>
    <strong style="font-size: 15px;">Rodar código</strong>
  </summary>

  <br/>

  <b>Servidor de desenvolvimento</b>

  > `npm run dev`

  <b>Servidor de produção</b>

  <p>*** Antes rodar script de build ***</p>

  > `npm run start`

  <b>Buildar código</b>

  > `npm run build`
</details>