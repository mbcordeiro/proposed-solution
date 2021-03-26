# Exemplo concentual de serviço cosumindo api de forma direta sem necessidade de armazenamento de dados

Esse modelo representa o microservice A que tem como objetivo ser seguro, toda a parte de segurança e acesso a api fica abstraido na Api Gateway*.

O modelo representa como seria a implementação de um microservice para obter os dados de terceiros sem a necessidade de armazenamento do mesmo evitando assim vazamentos e mais agilidade na consulta.


## Necessário

- Node 
- Docker

Rode as seguintes imagens:

![Imagens Docker](https://github.com/mbcordeiro/proposed-solution/blob/master/direct-service-api/img/image-docker2.png)

Para iniciar o servidor:
Gere a imagem docker : ```docker build -t direct-service-api .```

Em seguida rode:
```yarn start```
ou
```npm start ```

Exemplo de request a ser feito para o serviço:

![Request](https://github.com/mbcordeiro/proposed-solution/blob/master/direct-service-api/img/example-request-2.png)


*Não foi possível a implemtação da Api Gateway e comunicação como serviço
