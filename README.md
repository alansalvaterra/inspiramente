# **Inspiramente**

## **1. Visão Geral**

O **Inspiramente** é um projeto didático, desenvolvido como objeto de estudo, que oferece uma interface simples para adicionar, editar, excluir e favoritar pensamentos. A aplicação permite visualizar todos os pensamentos registrados em um mural, com o objetivo de praticar conceitos de desenvolvimento frontend.

Este projeto foi desenvolvido para aplicar e entender melhor os conceitos de **Angular**, **CSS** responsivo, **formulários reativos**, e integração com **SessionStorage** para o armazenamento de dados temporários no navegador.

---

## **2. Requisitos do Sistema**
Para rodar o projeto localmente, certifique-se de ter as seguintes dependências instaladas:
- **Node.js**: v18.18.0 ou superior
- **Angular CLI**: v18.1.4
- **TypeScript**: v5.5.2
- **Navegador Moderno** (Chrome, Firefox, etc.)

---

## **3. Instalação e Execução do Projeto**
### 3.1 Desenvolvimento
Clone o repositório, acesse o diretório do projeto, instale as dependências e suba o servidor:

```bash
git clone https://github.com/alansalvaterra/inspiramente.git
cd inspiramente
npm i
ng serve

> http://localhost:4200/
```

### 3.2 Produção
O projeto está disponível em produção no seguinte link:

[Inspiramente em Produção](https://inspiramente.vercel.app/home)

## **4. Estrutura do Projeto**
Aqui está uma visão geral da estrutura do projeto:
```
inspiramente/
├── src/
│   ├── app/
│   │   ├── components/       
│   │   ├── services/        
│   │   ├── interfaces/      
│   │   ├── app.component.*
│   │   ├── app.config.server.ts	
│   │   ├── app.config.ts	
│   │   ├── app.routes.ts	
│   ├── assets/              
│   ├── index.html         
│   ├── main.ts              
│   ├── main.server.ts              
│   ├── styles.css             
├── angular.json            
├── package.json             
├── README.md                 
├── server.ts
├── tsconfig.json
```

## **5. Funcionalidade**
5.1 Registro de Pensamentos
- Adicionar novos pensamentos com autor e mensagem.
- Visualizar os pensamentos registrados em um mural.

5.2 Favoritar Pensamentos

- Favoritar ou desfavoritar pensamentos, salvando-os como favoritos.

5.3 Editar e Excluir

- Editar o conteúdo de um pensamento existente.
- Excluir pensamentos do mural.

5.4 Funcionalidade Padrão

- Um pensamento de boas-vindas é exibido quando não há pensamentos registrados.

5.5 Funcionalidade Futuras

- **Escolha de modelos de card**: Diferentes bordas e sombras para os pensamentos.

- **Testes Automatizados**: Implementar testes unitários e de integração para garantir a qualidade e estabilidade da aplicação.


## **6. Tecnologias Utilizadas**
- Angular: Framework para a construção da interface de usuário.
- TypeScript: Linguagem utilizada no desenvolvimento do frontend.
- CSS Flexbox: Usado para a construção da interface responsiva.
- SessionStorage: Para armazenamento de dados temporários no navegador.
- Angular Material: Usado para componentes visuais como o Snackbar.


## **7. API e Backend**

O projeto Inspiramente não possui um backend completo, já que os dados são armazenados temporariamente no SessionStorage. Para persistência futura, um backend poderia ser adicionado usando Node.js, NestJS e um banco de dados como SQLite ou PostgreSQL.

