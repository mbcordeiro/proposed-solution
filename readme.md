# Solução proposta para acesso a dados de um *Bureau*

# **Descrição da Solução**
Esse *Readme* tem como objetivo apresentar uma solução arquitetural e de infraestrutura de segurança para um problema proposto, toda a solução será contextualizada com suas possíveis tecnologias, tanto em textos como com diagramas representando a proposta de solução de forma a atender os requisitos pré-definidos.

## Arquitetura

As arquiteturas propostas para essa solução são as de nanoservices e microservices. pois são arquiteturas altamente compatíveis com *cloud*, favorece o reuso, desenvolvimento e  manutenção do sofwtare e permite uma grande escalabilidade, 

Nessa solução será apresentada 3 serviços que atendem a necessidade para o problema proposta cada um deles será esplicado de forma individual, porém será dada uma visão geral do funcionamento do mesmos como um todo.

## Tencologias 

- Nodejs
- Express
- Typescript
- Redis

Nodejs por ser uma tecnologia opensource, segura para acesso de dados sensíveis de thread não bloqueante, uma tecnologia capaz de aliar performance e segurança ideal para acesso a dados de forma segura e perfomática,  utilizada junto com o express um poderoso servidor web para a aplicação, e typescript uma linguagem extremamente segura que facilita a manutabilidade do código deixando o software com um autonível de de qualidade. Essa tecnlogia será utilizada nos 3 serviços.

Os serviços b e c utilizarão a tecnologia redis para que sejam mais performáticos sem perder em segurança.

Redis por ser uma tecnologia nosql que armazena a estrutura de dados valor-chave em memória, serve para uso como banco de dados, cache, intermediário de mensagens e fila. O Redis oferece respostas em milissegundos permitindo milhões de solicitações por segundo para aplicativos em tempo real.Com ele podemos por exemplo armazenar consultas de dados mais recentes, com isso, evitamos queries repetidas sejam feitas na base dados, uma excelente vantagem, é uma opção extremamente rápida e performática. 

O diagrama abaixo explica como implementação do redis seria feita:

![Diagrama Redis cache](https://github.com/mbcordeiro/proposed-solution/blob/master/diagrams/redis-diagram.png)

## MicroService #A

### O problema 

Esse serviço acessará uma base de terceiros que contém dados extremamente sensíveis porém o acesso a estes não precisam ser altamente perfomaticos e sim seguros.

### Solução

A arquitetura utilizada para essa solução será a de microservice, pois ela terá apenas uma única responsabilidade, acessar a base de dados e retornar os dados requisitados.

A Api Gateway(Maiores explicações serão dadas a baixo) fará todo o processo de segurança e será a porta de entrada para a aplicação protegendo todos os serviços.

A requisição chega a api gateway para o serviço a, por meio de um endereço único a api gateway irá encaminhar a mensagem para o microservice, apenas requisições seguras serão encaminhadas para esse microservice pois a api gateway garantirá tal segurança. Em seguida o microservice acionara sua única responsabilidade requisitar a base de terceiros de acordo com as informações requisitadas, precessar esses dados e retornar para os dados requisitados para a api gateway fará o papel de devolver os dados ao requisitante.

Diagrama de arquitetura microservice A:

![Diagrama arquitetura a](https://github.com/mbcordeiro/proposed-solution/blob/master/diagrams/microservice-a-diagram.png)

## MicroService #B

### O problema 
Esse serviço acessará uma base de terceiros que contém dados  sensíveis e o acesso a esses dados precisa ser acessados de forma mais rápida e performática.

### Solução

Semelhante ao serviço A será utilizado a Api Gateway(Maiores explicações serão dadas a baixo) fará todo o processo de segurança e será a porta de entrada para a aplicação protegendo todos os serviços.

A requisição chega a api gateway para o serviço b, por meio de um endereço único a api gateway irá encaminhar a mensagem para o microservice, apenas requisições seguras serão encaminhadas para esse microservice pois a api gateway garantirá tal segurança. Em seguida o microservice acionara sua única responsabilidade requisitar os de acordo com as informações requisitadas, para a melhor performance de processamento e evitando queries repeditas o serviço acionará o redis que funcionará como um Message Broker (enfileiramento de mensagens) e caching intermediário ao acesso ao banco de dados de terceiro aonde acontece a leitura dos dados, o microservice acionará o redis caso a query requisitada for encontrada os dados serão processados, caso não o service acionará a base de terceiros em busca dos dados requisitados e em seguida fará o cache dessas informações para o redis, pois quando esses dados forem acessados novamente eles serão requisitados de forma mais rápida e eficiente. sendo assim o serviço será performático e preciso o tráfego dos dados, em seguida o service vai precessar esses dados e retornar para os dados requisitados para a api gateway fará o papel de devolver os dados ao requisitante.

Diagrama de arquitetura microservice B:

![Diagrama arquitetura b](https://github.com/mbcordeiro/proposed-solution/blob/master/diagrams/microservice-b-diagram.png)

## MicroService #C

### O problema 
Esse serviço acessará uma base de terceiros que contém dados não senssíveis e o acesso a esses dados precisa ser acessados de forma bem rápida, performática e escalável.

### Solução

A arquitetura utilizada para essa solução será a de microservice por facilitar a implementação do serviço, escalabilidade e rápido acesso a dados.

A Implementação será bastante semelhante ao serviço b, pois apesar de o serviço c não precisar de tanta segurança eles terão implementações similares com respeito a performance.

A Api Gateway(Maiores explicações serão dadas a baixo) fará todo o processo de segurança e será a porta de entrada para a aplicação protegendo todos os serviços.

A requisição chega a api gateway para o serviço b, porém o serviço será público e não será necessário grandes protocolos de segurança. Em seguida por meio de um endereço único a api gateway irá encaminhar a mensagem para o microservice, apenas requisições seguras serão encaminhadas para esse microservice pois a api gateway garantirá tal segurança. Em seguida o microservice acionara sua única responsabilidade requisitar os de acordo com as informações requisitadas, para a melhor performance de processamento e evitando queries repeditas o serviço acionará o redis que funcionará como um Message Broker (enfileiramento de mensagens) e caching intermediário ao acesso ao banco de dados de terceiro aonde acontece a leitura dos dados, o microservice acionará o redis caso a query requisitada for encontrada os dados serão processados, caso não o service acionará a base de terceiros em busca dos dados requisitados e em seguida fará o cache dessas informações para o redis, pois quando esses dados forem acessados novamente eles serão requisitados de forma mais rápida e eficiente. sendo assim o serviço será performático e preciso o tráfego dos dados, em seguida o service vai precessar esses dados e retornar para os dados requisitados para a api gateway fará o papel de devolver os dados ao requisitante.

Diagrama de arquitetura microservice C:

![Diagrama arquitetura c](https://github.com/mbcordeiro/proposed-solution/blob/master/diagrams/microservice-c-diagram.png)

# Arquitetura Proposta pra solução
Dessa forma os serviços funcionariam juntos de acordo com o diagrama abaixo: 

![Diagrama arquitetura](https://github.com/mbcordeiro/proposed-solution/blob/master/diagrams/arquitetura-diagram.png)

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

Essa solução pode ser visualizada nesse diagrama:

![Diagrama Api Gateway](https://github.com/mbcordeiro/proposed-solution/blob/master/diagrams/api-gateway-diagram.png)

# Escalabilidade 

Pensando no aumento expressivo do volume de acessos que ocorre no sistema,
podemos utilizar duas formas de escalamento das instâncias dos servidores:
- Reativa, na qual é determinado um limite na qual ativará a criação de mais instâncias para que seja possível suprir a demanda.
- Agendada, que pode ser utilizada quando se sabe que uma grande quantidade
de acessos irá ocorrer. As instâncias da aplicação podem ser escaladas
previamente, para poder atender a demanda e após esse período, reduzidas
para evitar custos desnecessários.

A desvantagem da escalagem reativa é que existe um período de tempo que leva para a criação destas instâncias auxiliares, ou seja, durante esse tempo, o sistema continuará lento
e pouco responsivo. A vantagem é que não é necessário um pré agendamento. Algum aumento inesperado de acessos que acontecer será atendido após o tempo necessário para a
criação das instâncias extras.

Diagrama escalabilidade reativa:

![Diagrama escalabilidade reativa](https://github.com/mbcordeiro/proposed-solution/blob/master/diagrams/reactive-scalability.png)

# Devops
Devem estar presentes, também, para melhor distribuir e atender os acessos, tecnologias como LoadBalancer (distribuição de carga), réplicas de leitura do banco de dados
entre outras.

Por fim, por se tratar de uma arquitetura altamente distribuída, utilizando-se de micro e nano serviços, é de extrema importância utilizarmos tecnologias de CI e CD para manter o sistema como um todo testado e simplificar, o máximo possível, o processo de deploy, pois ao contrário de um sistema monolítico, em que temos um único local de deploy, no sistema com arquitetura orientada a micro serviços, podemos ter dezenas, até centenas de instâncias rodando para atender a um único sistema, o que inviabiliza manter um deploy manual.
