# Solução proposta para acesso a dados de um *Bureau*

# **Descrição da Solução**
Esse *Readme* tem como objetivo apresentar uma solução arquitetural e de infraestrutura de segurança para um problema proposto, toda a solução será contextualizada com suas possíveis tecnologias, tanto em textos como com diagramas representando a proposta de solução de forma a atender os requisitos pré-definidos.

## Arquitetura

As arquiteturas propostas para essa solução são as de nanoservices e microservices. pois são arquiteturas altamente compatíveis com *cloud*, favorece o reuso, desenvolvimento e  manutenção do sofwtare e permite uma grande escalabilidade

Nessa solução será apresentada 3 softwares que atendem a necessidade para o problema proposta cada um deles será esplicado de forma individual, porém será dada uma visão geral do funcionamento do mesmos como um todo.

## NanoService #1

### O problema 

Esse serviço acessará uma base de terceiros que contém dados extremamente sensíveis porém o acesso a estes não precisam ser altamente perfomaticos e sim seguros.

### Solução

A arquitetura utilizada para essa solução será a de nanoservice, pois ela terá apenas uma única responsabilidade, acessar a base de dados e retornar os dados requisitados.

As tecnologias adotadas para esse nanoservice serão: 
- Nodejs
- Express
- Typescript
- PostgresSQL
- Oauth 2
- JWT
- Bcrypt

Nodejs por ser uma tecnologia opensource e segura para acesso de dados sensíveis de thread não bloqueante, utilizada junto com o express um poderoso servidor web para a aplicação, e typescript uma linguagem extremamente segura que facilita a manutabilidade do código deixando o software com um autonível de de qualidade.

PostgresSQL é uma excelente escolha de base de dados para um software que presa por segurança, pois é um banco extremamente robusto e com  bom nível de segurança e integridade.

O Oauth2 será utilizado como o protocolo de autenticação e segurança do serviço que fará toda a estrutura de autorização para a utilização do mesmo, aumentando a segurança do serviço.

JWT será utilizado para autenticação via token para aumentar a segurança do serviço

Bcrypt será utilizado para criptografar as credenciais de acesso do usuário ao serviço como email de login e senha.

## MicroService #2

### O problema 
Esse serviço acessará uma base de terceiros que contém dados  sensíveis e o acesso a esses dados precisa ser acessados de forma mais rápida e performática.

### Solução

A arquitetura utilizada para essa solução será a de microservice.

As tecnologias adotadas para esse microservice serão: 
- Nodejs
- Express
- Typescript
- MongoDB
- Oauth 2
- JWT
- Bcrypt

## MicroService #3

### O problema 
Esse serviço acessará uma base de terceiros que contém dados não senssíveis e o acesso a esses dados precisa ser acessados de forma bem rápida, performática e escalável.

### Solução

A arquitetura utilizada para essa solução será a de microservice.

As tecnologias adotadas para esse microservice serão: 
- Nodejs
- Express
- Typescript
- Redis