# Exemplo concentual de serviço cosumindo api de forma direta sem necessidade de armazenamento de dados

Esse modelo representa o microservice A que tem como objetivo ser seguro, toda a parte de segurança e acesso a api fica abstraido na Api Gateway*.

O modelo representa como seria a implementação de um microservice para obter os dados de terceiros sem a necessidade de armazenamento do mesmo evitando assim vazamentos e mais agilidade na consulta.


## Necessário

- Node 
- Docker

Rode as seguintes imagens:

![Imagens Docker]()

Para iniciar o servidor:
```yarn start```
ou
```npm start ```

Exemplo de request a ser feito para o serviço:

![Request]()


*Não foi possível a implemtação da Api Gateway e comunicação como serviço