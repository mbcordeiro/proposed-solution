# Exemplo concentual de serviço cosumindo api e fazendo cache de dados com redis

Esse modelo representa o microservice B e C seriam implementados esses serviços seriam devem ser ágeis por isso o uso o redis como banco de cache tornando a requisição do dados de terceiros ágeis, toda a parte de segurança e acesso a api fica abstraido na Api Gateway*.

## Necessário

- Redis 
- Node 
- Docker

Rode as seguintes imagens:

![Imagens Docker](https://github.com/mbcordeiro/proposed-solution/blob/master/fast-service-radis/image-docker.png)

Para iniciar o servidor:

Gere a imagem docker : ```docker build -t fast-service-redis .```

Em seguida rode 
```yarn start```
ou
```npm start ```

Exemplo de request a ser feito para o serviço:

![Request](https://github.com/mbcordeiro/proposed-solution/blob/master/fast-service-radis/request-example.png)


*Não foi possível a implemtação da Api Gateway e comunicação como serviço
