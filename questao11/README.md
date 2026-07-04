# 📚 Memoteca

A **Memoteca** é uma aplicação web desenvolvida com **Angular** no front-end e **ASP.NET Core Web API** no back-end. O objetivo do projeto é permitir que usuários publiquem e gerenciem seus pensamentos, frases e reflexões de forma simples e organizada.

A aplicação implementa as operações básicas de um **CRUD (Create, Read, Update e Delete)**, possibilitando cadastrar, visualizar, editar e excluir pensamentos.

## 📖 Objetivo do projeto

Este projeto foi desenvolvido com fins de aprendizado, colocando em prática conceitos de desenvolvimento Full Stack utilizando Angular e ASP.NET Core Web API, além da aplicação de boas práticas como separação de responsabilidades, arquitetura em camadas e utilização de DTOs e AutoMapper.

## 🚀 Tecnologias Utilizadas

### Front-end
- Angular
- TypeScript
- HTML5
- CSS3
- Angular CLI

### Back-end
- ASP.NET Core Web API
- C#
- Entity Framework Core
- SQL Server

---

## 📁 Estrutura do Projeto

O projeto está dividido em duas aplicações independentes:

memoteca/

│  
├── APImemoteca/ -> Back-end (.NET Web API)  
└── memoteca/ -> Front-end (Angular)


### 🖥️ Front-end

O front-end foi desenvolvido utilizando **Angular**, responsável por toda a interface da aplicação e comunicação com a API.

A estrutura principal está organizada da seguinte forma:
Dentro da pasta `src` encontram-se os componentes, serviços, modelos e demais arquivos responsáveis pela interface da aplicação.

As principais funcionalidades implementadas foram:

- Listagem dos pensamentos
- Cadastro de novos pensamentos
- Edição
- Exclusão
- Comunicação com a API utilizando HttpClient
- Navegação entre páginas utilizando Angular Router

---

### ⚙️ Back-end

O back-end foi desenvolvido utilizando **ASP.NET Core Web API**, seguindo uma arquitetura em camadas para separar responsabilidades e facilitar manutenção e evolução do sistema.

Sua estrutura está organizada da seguinte maneira:

APImemoteca

│  
├── Controllers  
├── Domain  
├── Dto  
├── Infra  
├── Profiles  
├── Services  
├── Program.cs  
└── appsettings.json   

---

### ✨ Funcionalidades

- ✅ Cadastrar pensamentos
- ✅ Listar pensamentos
- ✅ Editar pensamentos
- ✅ Excluir pensamentos
- ✅ Comunicação entre Angular e API REST
- ✅ Persistência em banco de dados

---
