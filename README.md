# Trabalho Prático 1: Amazon Web Services

## Disciplina: Engenharia de Software
## Alunos: 
           * Stéphanie Fonseca de Oliveira Gomes Magalhães            20203001401
           * Luísa Oliveira Vicente                                   20203007951
           * Eduardo Gomes de Freitas                                 20203002249
           * Leonardo Gonçalves Grossi                                20203003854


Este repositório contém um exemplo de uso da plataforma de serviços de computação em nuvem da Amazon, o Amazon Web Services (AWS).

O exemplo foi projetado para ser usado em uma aula prática sobre serviços de computação em nuvem.

O objetivo da aula é permitir que o aluno tenha um primeiro contato com a computação em nuvem e com tecnologias normalmente usadas nesse tipo de serviço, que no caso será usado como exemplo o AWS.

## Fundamentos do AWS

O Amazon Web Services (AWS) é uma plataforma de computação em nuvem que oferece uma ampla gama de serviços para auxiliar no desenvolvimento, implantação e gerenciamento de aplicativos. A AWS é conhecida por sua escalabilidade, confiabilidade e flexibilidade.

O AWS opera em várias regiões ao redor do mundo. Cada região é uma área geográfica isolada que contém uma ou mais Zonas de Disponibilidade (AZs). As AZs são data centers fisicamente separados dentro de uma região. Utilizar várias AZs em uma aplicação aumenta a resiliência e a disponibilidade.

Alguns serviços do AWS são globais, o que significa que estão disponíveis em todas as regiões. Esses serviços globais incluem o AWS Identity and Access Management (IAM), o AWS CloudFront (serviço de entrega de conteúdo) e o AWS Route 53 (serviço de DNS).

O AWS oferece uma variedade de serviços básicos que são fundamentais para o desenvolvimento de aplicativos, mas focaremos no serviço de banco de dados gerenciado pela AWS. Este serviço facilita a implantação, operação e dimensionamento de bancos de dados relacionais, como MySQL, PostgreSQL e Oracle.

Agora que entendemos os fundamentos da AWS, podemos prosseguir para exemplo prático.

## Preparando o Ambiente

1- Primeiramente deve-se criar uma conta no dynamobd do AWS clicando [aqui](https://aws.amazon.com/pt/).

2- Deve ser criada uma acess key. Para isso voce deve acessar sua conta do AWS
          
          *Depois deve acessar opções de usuário;
          *Acessar Security credentials;
          *No campo Access keys deve clicar em create Access key;
          *Por fim, deve anotar a Access key e a Secret access key e fazer o download do arquivo .csv file
          

![image](https://github.com/steponnie/TP1_EngSoft_AWS/assets/61642301/85f829a8-fcca-436d-9629-681597b429e6)


3- Você deve instalar a versão LTS do node(a versão mais estável no momento) em sua máquina clicando [aqui](https://nodejs.org/en/download). Depois de baixar, basta seguir os passos de instalação para o seu sistema operacional.

4- Agora você deve baixar o AWS clicando [aqui](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html). Depois de baixar, basta seguir os passos de instalação para o seu sistema operacional.

5- É recomendado ter o VScode instalado no computador pois ele possui um terminal integrado, o que facilita a execução do código. Abra-o e inicialize um terminal. Nele digite os seguinte comando ```aws --version```

Este comando serve como confirmação da instalação do AWS e ele deve mostrar a versão instalada no seu computador, se a instalação tiver sido bem sucedida.

## Configurando o AWS

Abra o terminal e digite o seguinte comando ```aws configure```
                     
          *Colocar a Access key criada e clicar enter;
          *Colocar a Secret access key criada e clicar enter;
          *Selecionar uma região(por exemplo: "us-east-1") e clicar enter;
          *Saltar o output format clicando no enter.
            
![image](https://github.com/steponnie/TP1_EngSoft_AWS/assets/61642301/de9ecd33-1c0a-47c1-9cbe-326c8b96963d)

Pronto, o AWS foi configurado!

## Executando o código 
Antes de tudo, clone o repositório no computador para poder executar o código.

Para verificar as alterações no AWS, você deve acessar sua conta e clicar em ```DynamoDB```. Na próxima página, para vizualizar as tabelas você deve clicar em ```Tables```, localizado no canto esquerdo da tela. As tabelas são visíveis em ```Explore items```.

Primeiro você deve executar o comando ```npm i @aws-sdk/client-sns``` no terminal, para garantir que você tem a versão mais atual do sdk.

### Criando uma tabela
Abra o projeto na IDE ou compile diretamente pelo terminal. Na classe ddb_createtable.js, conforme o código abaixo, altere os atributos  ```AttributeName```, ```AttributeType``` e ```tableName``` para criar a tabela no AWS. No terminal, execute o comando  ```node src/ddb_createtable.js``` que contém a chamada da classe e a tabela será criada. 
 
```javascript
export const params = {
  AttributeDefinitions: [
    {
      AttributeName: "Season", // nome do atributo
      AttributeType: "N", // tipo do atributo
    },
    {
      AttributeName: "Episode", // nome do atributo
      AttributeType: "N", // tipo do atributo
    },
  ],
  KeySchema: [
    {
      AttributeName: "Season", // primeiro atributo
      KeyType: "HASH",
    },
    {
      AttributeName: "Episode", // segundo atributo
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "Shows", // nome da tabela
  StreamSpecification: {
    StreamEnabled: false,
  },
};
```
Nesse exemplo dois atributos foram usados como chaves primárias, mas esse número pode variar de acordo com a tabela.

### Inserindo um item na tabela
Para adicionar um item na tabela, abra a classe ddb_putitem.js, conforme o código abaixo, substitua o nome da tabela em ```TableName``` e altere os parâmetros do construtor ```Item``` de acordo com a tabela criada anteriormente. No terminal, execute o comando ```node src/ddb_putitem.js``` que contém a chamada da classe e os itens serão adicionados à tabela. 
```js
export const params = {
  TableName: "Shows", // nome da tabela
  Item: { // item a ser inserido
    "Season": {"N": "1"},
    "Episode": {"N": "1"},
    "Description": {"S": "Pilot"}
  },
};
```
Nesse exemplo foram inseridas duas chaves primárias, mas outros atributos podem ser inseridos.

### Deletando um item da tabela
Na classe ddb_deleteitem.js está o comando para deletar um item.
```TableName``` indica o nome da tabela cujo item se quer deletar.
Dentro de ```Key``` deve-se indicar a chave usada para identificar o item, nesse caso ```Season``` e ```Episode```. No terminal, execute o comando ```node src/ddb_deleteitem.js``` que contém a chamada da classe e os itens serão deletados da tabela.
```js
export const params = {
    TableName: "Shows", // nome da tabela
    Key: { // chave primaria
      "Season": {"N": "1"},
      "Episode": {"N": "1"},
    },
  };
```
### Atualizando um item da tabela
A classe ddb_updateitem.js pode modificar items já inseridos em uma tabela.

```TableName``` indica o nome da tabela e os valores de ```Key``` são a chave primaria que identifica o item. Os valores da chave *não* podem ser modificados.

```UpdateExpression``` indica qual tipo de modificação será feita(```SET```) , qual variável será modificada(```Description```) e para qual expressão ela será modificada(```value```).

```ExpressionAttributeValues``` serve para designar tipo e valores para a expressão ```value```.

Finalmente ```ReturnValues: "ALL_NEW"``` ira retornar todos os valores que foram modificados no item.

No terminal, execute o comando ```node src/ddb_updateitem.js``` para executar a classe.
```js
export const params = {
  TableName: "Shows",
  Key: { // chave primaria
    Season: { N: "1" },
    Episode: { N: "1" },
  },
  UpdateExpression: "SET Description = :value",
  ExpressionAttributeValues: {
    ":value": { "S": "First Episode" },
  },
  ReturnValues: "ALL_NEW",
};
```
### Pegando um item da tabela
A classe ddb_getitem.js pega um item contido na tabela.

```TableName``` indica o nome da tabela e os valores de ```Key``` são a chave primaria que identifica o item.

Essa classe retorna todos os valores contidos no item. Nesse exemplo ela retornaria a variável ```Description``` que não é uma chave. Para executar a classe use o comando ```node src/ddb_getitem.js``` no terminal.
```js
export const params = {
    TableName: "Shows", // nome da tabela
    Key: { // chave primaria
      "Season": {"N": "1"},
      "Episode": {"N": "1"},
    },
  };
```
### Listando todas as tabelas
A classe ddb_listtable.js, conforme o código abaixo, serve para listar todas as tabelas que estão no AWS. Para isso basta executar o comando ```node src/ddb_listtable.js``` que contém a chamada da classe e, assim, todas as tabelas serão listadas.
```js
import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

export const run = async () => {
  try {
    const data = await ddbClient.send(new ListTablesCommand({}));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
```

### Deletando uma tabela
A classe ddb_deletetable.js, conforme o código abaixo, serve para deletar uma tabela. Para isso basta alterar o parâmetro ```TableName``` com o nome da tabela que deseja deletar. No terminal, execute o comando ```node src/ddb_deletetable.js``` que contém a chamada da classe e a tabela será deletada.
```javascript
export const params = {
  TableName: "Shows", // nome da tabela
};


export const run = async () => {
  try {
    const data = await ddbClient.send(new DeleteTableCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
```

## Considerações finais
Neste roteiro, exploramos os principais serviços e conceitos da Amazon Web Services (AWS), uma das principais plataformas de computação em nuvem disponíveis atualmente. Ao longo do documento, discutimos diversas áreas, como a configuração inicial da conta, serviços de armazenamento e principalmente os serviços de banco de dados.

Outras operações podem ser executadas, mas focamos nas principais que foram: criação de tabelas; inserção de itens nas tabelas; busca de itens na tabela; atualização de dados da tabela; deletar dados da tabela; listar tabelas; e deletar tabelas. Porém, outras poderiam ser realizadas como por exemplo criar colunas ou excluir colunas.

Este roteiro é apenas um ponto de partida para explorar a ampla gama de serviços oferecidos pela AWS. À medida que a plataforma continua evoluindo, é essencial acompanhar as atualizações e novos recursos lançados pela Amazon.

Lembre-se de que a AWS é uma ferramenta poderosa, mas também complexa. Portanto, para se familiarizar com ela é necessário tempo de estudo e muita prática.
