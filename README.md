## **Busca de Usuários do GitHub**

Olá meu nobre, seja bem-vindo ao pesquisador de usuários do GitHub, aqui qualquer usuário que você inserir retornaremos as informações dele, como o nome e o link para o perfil oficial do GItHub do usuário.

Primeiramente, para usar o pesquisador você irá precisar ter ele em sua máquina, então vamos precisar de um aplicativo que consiga processar as linhas de código do pesquisador, e dependências como frameworks e modelos de estilagem para conseguir rodar a aplicação.

1. **Instalando o aplicativo para rodar a aplicação**

O aplicativo que você precisa usar para conseguir rodar o sistema é o Visual Studio Code, disponível em:
**https://code.visualstudio.com/download**

2. **Instalando o ambiente**

Para que a aplicação possa rodar com as dependências que iramos instalar futuramente, precisamos de um ambiente de execução, que nesse caso será o Node.js, disponível em:

**https://nodejs.org/pt**

Com o nosso compilador de código e ambiente instalado na sua máquina, você agora pode "instalar" a aplicação em seu computador, mas antes disso você precisa da ferramenta correta para fazer isso

3. **Instalando a ferramenta de clonagem**

Acesse o link e instale o GitBash, que usaremos para clonar o repositório:

**https://git-scm.com/downloads**

4. **Clonando a aplicação**

Com tudo instalado, crie uma pasta na sua área de trabalho, e dentro dela clique com o botão direito do mouse e selecione "Open Git Bash Here", após isso, uma janela preta irá aparecer, insira o seguinte comando seguido do link do repositório

**git clone https://github.com/wyllianr/AplicativoBuscarUsuarios.git**

Com isso a aplicação será clonada, você agora deve abrir o VIsual Studio Code e abrir a aplicação

5. **Selecionando o caminho da aplicação**

No Visual Studio Code, clique no botão "File" no canto superior esquerdo e selecione a opção "Open Folder" (o meu está em inglês o seu pode mudar), e selecione a pasta que foi clonada dentro da pasta que você criou no 4° passo

6. **Executando a aplicação**

Agora dentro do caminho da pasta, você terá que abrir o terminal nas abas, clicando em "Terminal" para abrir o powershell, dentro dele execute o comando:

**npm run dev**

Agora a aplicação estará rodando em seu navegador.

7. **Usando a aplicação**

Para usar a aplicação é bem simples, basta você escoler o tipo de estilagem entre Style-Components e Tailwind, inserir o nome do usuário de qualquer pessoa do GitHub, e apertar o enter para pesquisar, bem simples e fácil. Para acessar os perfis basta apertar nos botões verdes em cada tela
