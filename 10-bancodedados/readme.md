# BANCO DE DADOS

## O que é um banco de dados?

Banco de dados é um conjunto de dados que estão organizados de forma a permitir o acesso, a manipulação e a recuperação de informações de forma rápida e eficiente.

## Banco de dados x SGDB

Banco de dados é o local onde os dados são armazenados, enquanto o Sistema de Gerenciamento de Banco de Dados (SGDB) é o software que gerencia o banco de dados.

## Tipos de banco de dados

- **Banco de Dados Relacional**: é um banco de dados que armazena dados em tabelas, que são compostas por linhas e colunas. Cada linha é um registro e cada coluna é um campo. Exemplos: MySQL, PostgreSQL, Oracle, SQL Server, SQLite.

- **Banco de Dados Não-Relacional**: é um banco de dados que armazena dados de forma mais flexível, sem a necessidade de seguir um esquema fixo. Exemplos: MongoDB, Cassandra, Redis.

**OBS: Vamos aprender sobre bancos de dados relacionais.**

## Quais bancos de dados relacionais mais utilizados?

- **MySQL**: é um banco de dados relacional de código aberto que é amplamente utilizado em aplicações web.
- **PostgreSQL**: é um banco de dados relacional de código aberto que é conhecido por sua confiabilidade e robustez.
- **Oracle**: é um banco de dados relacional que é amplamente utilizado em grandes empresas.
- **SQL Server**: é um banco de dados relacional da Microsoft que é amplamente utilizado em empresas que utilizam tecnologias Microsoft.
- **SQLite**: é um banco de dados relacional de código aberto que é amplamente utilizado em aplicações móveis.

## SQL

SQL (Structured Query Language) é uma linguagem de consulta estruturada que é utilizada para acessar e manipular dados em bancos de dados relacionais.

## Comandos SQL

- **CREATE DATABASE**: cria um novo banco de dados.
- **CREATE TABLE**: cria uma nova tabela.
- **INSERT INTO**: insere um novo registro em uma tabela.
- **SELECT**: recupera registros de uma ou mais tabelas.
- **UPDATE**: atualiza registros em uma tabela.
- **DELETE**: exclui registros de uma tabela.

## Exemplo de criação de um banco de dados

```sql
CREATE DATABASE nome_do_banco_de_dados;
```

## Exemplo de criação de uma tabela

```sql
CREATE TABLE nome_da_tabela (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);
```

## Exemplo de inserção de um registro

```sql
INSERT INTO nome_da_tabela (id, nome, email) VALUES (1, 'Fulano', 'fulano@email.com');
```

## Exemplo de recuperação de registros

```sql
SELECT * FROM nome_da_tabela;
```

## Exemplo de atualização de um registro

```sql
UPDATE nome_da_tabela SET nome = 'Ciclano' WHERE id = 1;
```

## Exemplo de exclusão de um registro

```sql
DELETE FROM nome_da_tabela WHERE id = 1;
```

## Conclusão

Neste módulo, aprendemos o que é um banco de dados, os tipos de banco de dados, os bancos de dados relacionais mais utilizados, a linguagem SQL e os comandos SQL mais utilizados.