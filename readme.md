# Solução proposta para acesso a dados de um *Bureau*

# **Descrição da Solução**
Esse *Readme* tem como objetivo apresentar uma solução arquitetural e de infraestrutura de segurança para um problema proposto, toda a solução será contextualizada com suas possíveis tecnologias, tanto em textos como com diagramas representando a proposta de solução de forma a atender os requisitos pré-definidos.

## Arquitetura

As arquiteturas propostas para essa solução são as de nanoservices e microservices. pois são arquiteturas altamente compatíveis com *cloud*, favorece o reuso, desenvolvimento e  manutenção do sofwtare e permite uma grande escalabilidade

Nessa solução será apresentada 3 softwares que atendem a necessidade para o problema proposta cada um deles será esplicado de forma individual, porém será dada uma visão geral do funcionamento do mesmos como um todo.

## MicroService #1

### O problema 

Esse serviço acessará uma base de terceiros que contém dados extremamente sensíveis porém o acesso a estes não precisam ser altamente perfomaticos e sim seguros.

### Solução

A arquitetura utilizada para essa solução será a de microservice, pois ela terá apenas uma única responsabilidade, acessar a base de dados e retornar os dados requisitados.

As tecnologias adotadas para esse nanoservice serão: 
- Nodejs
- Express
- Typescript
- PostgresSQL

Nodejs por ser uma tecnologia opensource e segura para acesso de dados sensíveis de thread não bloqueante, utilizada junto com o express um poderoso servidor web para a aplicação, e typescript uma linguagem extremamente segura que facilita a manutabilidade do código deixando o software com um autonível de de qualidade.

PostgresSQL é uma excelente escolha de base de dados para um software que presa por segurança, pois é um banco extremamente robusto e com  bom nível de segurança e integridade.

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

Nodejs por ser uma tecnologia opensource e segura para acesso de dados sensíveis e ao mesmo tempo performática com capacidade de escalar de forma performatica, utilizada junto com o express um poderoso servidor web para a aplicação, e typescript uma linguagem extremamente segura que facilita a manutabilidade do código deixando o software com um autonível de de qualidade.

MongoDB uma tecnologia nosql bastante poderosa capaz de aliar segurança e velocidade no acesso a dados.

## MicroService #3

### O problema 
Esse serviço acessará uma base de terceiros que contém dados não senssíveis e o acesso a esses dados precisa ser acessados de forma bem rápida, performática e escalável.

### Solução

A arquitetura utilizada para essa solução será a de microservice por facilitar a implementação do serviço, escalabilidade e rápido acesso a dados.

As tecnologias adotadas para esse microservice serão: 
- Nodejs
- Express
- Typescript
- Redis
- Elasticsearch

Nodejs por ser uma tecnologia opensource extremanete performatica com uma grande capacidade de escalar, utilizada junto com o express um poderoso servidor web para a aplicação, e typescript uma linguagem extremamente segura que facilita a manutabilidade do código deixando o software com um autonível de de qualidade.

Redis por ser uma tecnologia nosql que armazena a estrutura de dados em memória, podendo ser utilizado para fazer o papel de Message Broker (enfileiramento de mensagens) e caching, 
com ele podemos por exemplo armazenar consultas de dados mais recentes, com isso, evitamos queries repetidas sejam feitas na de dados, uma excelente vantagem, é uma opção extremamente rápida e performática. 

Elasticsearch é um mecanismo de busca que disponibiliza dados em tempo real, com alto poder de indexação e distribuido, algo que favorece sua agilidade é que ele armazena os dados em forma de documentos e depois disponibiliza esses documentos no formato JSON. Por trabalhar com cluster a tecnologia compartilha dados para prover escalabilidade e alta disponibilidade.

# API Gateway

Amazon Api Gateway é uma ferramenta de gerenciamento de APIs que fica entre o cliente e uma coleção de serviços de back-end.
Ele funciona como um proxy inverso, que aceita todas as chamadas da interface de programação de aplicações (API), agrega os vários serviços necessários para realizá-las e retorna o resultado apropriado.

Api gateway faz parte do sistema de gerenciamento da API. É uma excelente opção de segurança pois  Ele intercepta todas as solicitações de entrada e as envia por meio desse sistema, que processa diversas funções necessárias.

Dentro do contexto apresentado a Api gateway ajuda na resolução de alguns problemas:

- Proteger  a api da utilização excessiva e de abusos, pois ela utiliza um serviço de autenticação e limitação de taxa. 

- Inclui ferramentas de análises ferramentas de monitoramento e análise o que ajuda a entender como as pessoas utilizam as apis.

- Dentro da arquitetura de microservices uma única solicitação pode exigir chamadas para dezenas de aplicações distintas.

- Como a Api Gateway faz com que seja acessado um endereço único com diversos endpoints, ela encaminha a mensagem para os microservices de forma correta, sendo assim quem está de fora não sabe nem quantos microservices ele está acessando.

- Api gateway traz recusros de autenticação e transformação de mensagens.

A API Gateway será responsável por toda a parte de segurança e autenticação para acesso ao microservices.

Essa solução pode ser visualizada nesse diagrama.
