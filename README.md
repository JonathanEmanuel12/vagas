# vagas

### Descrição
API que fornece um controle de usuário que possibilita fazer as operações CRUD utilizando o banco de dados MySQL.

**Ferramentas e tecnologias**
* Node.js
* Express
* Sequelize
* MySQL
* JSON

**Rotas**
* GET / 

Retorna todos os usuários salvos.
* GET /:id 

Retorna o usuário salvo que corresponde ao id.
* POST / 

Salva o usuário informado e retorna uma mensagem de sucesso.

Atributos que devem ser informados - nome, email, nome_empresa, senha, telefone.
* PUT /:id

Edita o usuário que corresponde ao id.

Atributos que devem ser informados - nome, nome_empresa, telefone.
* PUT /login/:id

Edita as informações de login do usuário que corresponde ao id.

Atributos que devem ser informados - email, senha.
* DELETE /:id

Apaga o usuario que corresponde ao id.

**Para testar essa api é necessário ter o Node.js e MySql instalado. As informações do banco de dados como login e senha devem ser alteradas conforme necessário.**

**Deve-se ter também um banco de dados já criado dentro do MySQL com o nome "vagasalestime", a tabela é criada pela API.**
