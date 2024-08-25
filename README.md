# Projeto PROJETO-LIKE-ACADEMY Academy

Este projeto é um backend desenvolvido em C# com .NET, projetado para gerenciar ações de "like" e "dislike" em imagens. Ele utiliza o padrão Mediator para gerenciar a comunicação entre componentes e manter uma arquitetura limpa e escalável.


## Requisitos

### Backend
- .NET 6.0 SDK ou superior
- Git
- Um editor de código, como Visual Studio ou Visual Studio Code

### Frontend
- Node.js (versão 14.x ou superior)
- npm ou yarn


## Passo a Passo para Instalação 

1. **Clone o repositório:**

    ### Backend

   ```bash
   git clone https://github.com/RobsonFerreira1992/projeto-like-academy.git

   cd projeto-like-academy

   cd matchlikephoto

   dotnet restore

   dotnet build

   dotnet run

### Frontend
    cd projeto-like-academy

    cd matchlikephotoview

    yarn add

    yarn dev

![Captura de Tela 2024-08-25 às 10 07 17](https://github.com/user-attachments/assets/69351e8e-c9f3-40d8-bfa1-e2dbb520f085)


### 5. **Explicação do Uso do Mediator**

```markdown
## Por que usamos o Mediator na Aplicação?

O padrão **Mediator** é utilizado nesta aplicação para promover uma comunicação desacoplada entre diferentes partes do sistema, como controladores, handlers e serviços. Em um sistema sem Mediator, o código pode se tornar complexo e difícil de manter, pois diferentes partes do sistema se comunicam diretamente umas com as outras.

### Benefícios do Uso do Mediator:

- **Desacoplamento:** O Mediator permite que componentes se comuniquem sem depender diretamente uns dos outros. Isso facilita a manutenção e evolução da aplicação, pois as mudanças em um componente não afetam diretamente outros componentes.

- **Organização:** Centraliza a lógica de comunicação em handlers específicos, o que torna o código mais organizado e fácil de entender.

- **Testabilidade:** Como os componentes não estão diretamente acoplados, é mais fácil criar testes unitários para eles, simulando diferentes cenários de comunicação.

### Como o Mediator é Usado na Aplicação:

Nesta aplicação, o Mediator é utilizado para:
-  Quando o controlador precisa carregar imagens, ele envia um comando ao Mediator, que delega essa responsabilidade a um handler específico.
![Captura de Tela 2024-08-25 às 10 11 24](https://github.com/user-attachments/assets/31d8793b-d43e-4591-a455-9150c061ec64)


- **Atualizar Likes e Dislikes:** Da mesma forma, quando o usuário dá um like ou dislike em uma imagem, um comando é enviado ao Mediator, que atualiza o estado da imagem através de um handler.

![Captura de Tela 2024-08-25 às 10 15 37](https://github.com/user-attachments/assets/8ded2274-9e9a-413c-9290-b2faf6af464a)


Isso torna o código modular e flexível, permitindo a adição de novas funcionalidades com impacto mínimo no restante do sistema.
## Como Executar o Projeto

Após seguir os passos de instalação, você pode executar o projeto com o comando:

```bash
dotnet run





### 7. **Como Contribuir**

```markdown
## Como Contribuir

Se você deseja contribuir para este projeto, siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-nova-feature`.
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-nova-feature`.
5. Abra um Pull Request.


## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
