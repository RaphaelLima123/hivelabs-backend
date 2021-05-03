# Requisitos para a aplicação

É necessários seguir todos os passos abaixo para que a aplicação funcione

### Primeiro passo

Criar uma pasta para este projeto e clonar o repositório

```
mkdir projeto
cd projeto
git clone https://github.com/RaphaelLima123/hivelabs-backend .
```

### Segundo passo

Instalar as dependências

```
yarn
```

### Terceiro passo

Atualizar o arquivo ormconfig.json de acordo com o seu banco de dados postgresql

```
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "hivelabsdb",
  "synchronize": true,
  "entities": [
    "./src/entities/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
```

### Quarto passo

Rodar as migrations do banco de dados

```
yarn typeorm migration:run
```

### Quinto passo

Rodar a aplicação

```
yarn dev
```

Quando as mensagens: "Servidor rodando na porta 3333" e "Banco de dados conectado" aparecerem a aplicação está pronta para ser utilizada

## Observações

Vale lembrar que para consumir as API's desta aplicação será necessário uma ferramenta que faz requisições, recomendo utilizar o insomnia (https://insomnia.rest/download) ou algum de sua preferência.

# API, suas rotas e parâmetros

<<<<<<< HEAD
Os parâmetros estão representados por ':' antes do nome, como por exemplo localhost:3333/teste/:id é o parâmetro id na URL da API. As API's disponíveis são:
=======
os parâmetros estão representados por ':' antes do nome, como por exemplo localhost:3333/teste/:id é o parâmetro id na URL da API. As API's disponíveis são:
>>>>>>> ae44be26531f35bdc55ffbd979af8b113bf78327

### GET '/users/nickname/:nickname

Passando o parâmetro de nickname, retorna um único usuário com nome, sobrenome e nickname.

### GET '/users/:name/:lastname?'

Passando o parâmetro de nome e/ou último nome retorna um array de usuários que POSSUEM os parâmetros que foram passados(nome e último nome)

### POST '/users'

Essa rota cria um novo usuário. Para isso é necessário que o body da requisição deva ser um objeto JSON como no exemplo:

```
{
	"name": "Fulano",
	"lastname": "Ciclano",
	"address": "Rua 1",
	"nickname": "primeiroUser",
	"bio": ""
}
Vale lembrar que a bio deve ser enviada mesmo que seja vazia.
```

### PUT '/users/:id'

Essa rota permite alterar o último nome e o endereço do usuário correspondente ao id enviado como parâmetro. A requisição deve conter um body no formato JSON como no exemplo:

```
{
	"lastname": "Ciclano",
	"address": "Rua Nova, 123"
}
```

### PUT '/users/nickname/:id'

Essa rota permite alterar o nickname do usuário correspondente ao id enviado como parâmetro. A requisição deve conter um body no formato JSON como no exemplo:

```
{
	"nickname": "novoNick",
}
```

### DELETE '/users/:id'

Esta rota deleta o usuário correspondente ao id que foi passado como parâmetro
