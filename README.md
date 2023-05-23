# Trabalho Prático 1: Amazon Web Services

## Disciplina: Engenharia de Software
## Alunos: 
           * Stéphanie Fonseca de Oliveira Gomes Magalhães
           * Luísa Oliveira Vicente


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

1- Primeiramente deve-se criar uma conta no dynamobd do AWS clicando [aqui](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-examples-using-tables.html).

2- Deve ser criada uma acess key. Para isso voce deve acessar sua conta do AWS
          
          *Depois deve acessar opções de usuário;
          *Acessar Security credentials;
          *No campo Access keys deve clicar em create Access key;
          *Por fim, deve anotar a Access key e a Secret access key e fazer o download do arquivo .csv file
          

![image](https://github.com/steponnie/TP1_EngSoft_AWS/assets/61642301/85f829a8-fcca-436d-9629-681597b429e6)


3- Você deve instalar a versão LTS do node(a versão mais estável no momento) em sua máquina clicando [aqui](https://nodejs.org/en/download). Depois de baixar, basta seguir os passos de instalação para o seu sistema operacional.

4- Agora você deve baixar o AWS clicando [aqui](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html). Depois de baixar, basta seguir os passos de instalação para o seu sistema operacional.

5- Você deve ter o VScode instalado no computador. Abra-o e inicialize um terminal. Nele digite os seguinte comando

```aws --version```

Este comando serve como confirmação da instalação do AWS e ele deve mostrar a versão instalada no seu computador, se a instalação tiver sido bem sucedida.

## Configurando o AWS

no powershell:
                * "aws --version" e dar enter
            * "aws configure" e dar enter
            * colocar a chave criada e dar enter
              * colocar a senha e dar enter
            * colocar regiao "us-east-1" e dar enter
            
            

