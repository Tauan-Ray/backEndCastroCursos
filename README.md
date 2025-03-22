# Minha API em Node.js

Dois amigos da escola encontramos uma forma de ajudar os demais colegas de classe com o aprendizado de cursos externos.
A solução foi criar um grupo e adicionar alunos interessados, onde no mesmo, compartilharíamos nossas contas de diversas plataformas de ensino com diferentes cursos já comprados nela, no repositório da aplicação completa está mais detalhada tudo isso.

# Sobre a API:

A API visa criar tanto usuarios como cursos, além de fazer a realização de um sistema CRUD ( CREATE, READER, UPDATE, DELETE ), ela é a parte do back-end da aplicação completa que tenta solucionar nossa problemática.

# EndPoints:
        
**Rota:** GET '/'
                
**Descrição:** Visualiza os usuários cadastrados no banco de dados

**Exemplo de resposta:** 

                JSON
                [{
                "id": "67d8ee7cb7e4a18b5b5b2j13",
                 "name": "userTeste",
                "email": "teste@gmail.com",
                "password": "12345678"  
                },
                {
                "id": "67db142e034d3b4430fe22da",
                "name": "José",
                "email": "emailTeste@gmail.com",
                "password": "12345678"
                }]
        
**Rota:** POST '/'

**Descrição:** Cria e adiciona um novo usuário no banco de dados

**Exemplo de entrada:**

                    JSON
                    {
                        "name": "userTeste",
                        "email": "teste@gmail.com",
                        "password": "12345678" 
                    }
        
**Rota:** DELETE '/:id'

**Descrição** Delete um usuário do banco de dados a partir do id

**Exemplo de entrada:**

        *'/67d8ee7cb7e4a18p5b5b2j13'*
                    JSON
                    {
                        message: "Usuário deletado com sucesso"
                    }

##

**Rota:** GET '/home'

**Descrição:** Lista todos os cursos já cadastrados no banco de dados

**Exemplo de saída:**

            JSON
            [
                {
                    "id": "67db1965a142c64c653f1673",
                    "name": "Js avançado",
                    "emailAccount": "user2@gmail.com",
                    "passwordAccount": "123456",
                    "describe": "curso de js para pessoas avançadas",
                    "link": "https://linkteste.com",
                    "image": "image.png"
                },
                {
                    "id": "67db1eeef49f42e2b07accbf",
                    "name": "Dart avançado",
                    "emailAccount": "user3@gmail.com",
                    "passwordAccount": "123456",
                    "describe": "curso de dart para pessoas avançadas",
                    "link": "https://linkteste2.com",
                    "image": "imageDart.png"
                }
            ]

**Rota:** '/home'

**Descrição:** Cria e adiciona um novo curso ao banco de dados

**Exemplo de entrada:**

            JSON
            {
                    "name": "Dart avançado",
                    "emailAccount": "user3@gmail.com",
                    "passwordAccount": "123456",
                    "describe": "curso de dart para pessoas avançadas",
                    "link": "https://linkteste2.com",
                    "image": "imageDart.png"
            }

**Rota:** 'home/:id'

**Descrição:** Deleta um curso do banco de dados a partir do seu id

**Exemplo de entrada:**

            *'/home/67db1eeef49f42e2b07accbf'*

**Exemplo de saída:** 

            JSON
            {
                message: "Curso deletado com sucesso!"
            }

# Tecnologias utilizadas no desenvolvimento:


<div align="center"><br>
        <img width=100 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" hspace="40" />
        <img width=100 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" hspace="40" />
        <img width=100 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" hspace="40" />
        <img width=100 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg" hspace="40" />
        </div>
</div>