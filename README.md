# Caesar Cipher - Criptografia de Texto

Este é um projeto simples que implementa a **Cifra de César**, um algoritmo de criptografia simétrica, que utiliza uma chave para deslocar cada letra do alfabeto em uma quantidade específica. A aplicação permite que o usuário cifre ou decifre um texto utilizando esse algoritmo.

## Descrição

A **Cifra de César** é um dos algoritmos de criptografia mais antigos e simples. Ela funciona deslocando as letras do alfabeto por um número fixo de posições. Por exemplo, com uma chave de 3, a letra **A** se torna **D**, a letra **B** se torna **E**, e assim por diante.

### Exemplo:

- Texto Original: **HELLO**
- Chave: **3**
- Texto Cifrado: **KHOOR**

Para decifrar o texto, basta usar a chave inversa (neste caso, **3** também), deslocando as letras para trás.

## Funcionalidades

- **Codificação**: O texto inserido será cifrado usando a chave fornecida.
- **Decodificação**: O texto cifrado será decifrado de volta para o formato original com a chave fornecida.
- **Cópia para a área de transferência**: O usuário pode copiar o texto cifrado ou decifrado para a área de transferência, facilitando o uso e compartilhamento.

## Como Usar

1. **Digite seu texto**: Insira o texto que deseja cifrar ou decifrar no campo "Insira seu texto".
2. **Escolha a chave**: Use o controle deslizante para escolher a chave de 1 a 26. A chave determina o número de posições que cada letra será deslocada no alfabeto.
3. **Escolha a ação**: Selecione se deseja **Codificar** ou **Decodificar** o texto.
4. **Executar**: Clique no botão "Executar" para aplicar a cifra de César.
5. **Copiar**: Após gerar o texto cifrado ou decifrado, clique no ícone de copiar para transferir o texto para a área de transferência.

## Como Funciona a Cifra de César

A Cifra de César é um tipo de **substituição simples**. Ela desloca cada letra do texto por um número fixo de posições no alfabeto. O processo é feito em duas direções:

- **Codificação**: Desloca-se as letras para a direita no alfabeto, de acordo com a chave.
- **Decodificação**: Desloca-se as letras para a esquerda no alfabeto, utilizando a mesma chave.

### Exemplo de Codificação:
- **Texto original**: `HELLO`
- **Chave**: `3`
- **Texto cifrado**: `KHOOR`

Cada letra do texto original é substituída por outra letra que está 3 posições à frente dela no alfabeto.

### Exemplo de Decodificação:
- **Texto cifrado**: `KHOOR`
- **Chave**: `3`
- **Texto original**: `HELLO`

A chave é usada para "desfazer" o deslocamento, retornando o texto ao seu estado original.

## Requisitos

- Um navegador moderno que suporte JavaScript.
- Conexão com a internet (para carregar os ícones do Font Awesome).

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

- **index.html**: A estrutura HTML que define a interface do usuário.
- **style.css**: O arquivo CSS que estiliza a interface do usuário.
- **script.js**: O arquivo JavaScript que contém a lógica para codificação e decodificação do texto e manipulação da interface.

## Tecnologias Usadas

- **HTML5**: Estruturação da página e criação dos campos de entrada.
- **CSS3**: Estilo da página, incluindo responsividade e efeitos visuais.
- **JavaScript**: Implementação da lógica da cifra de César e interação com o usuário.
- **Font Awesome**: Ícones para as ações de codificação/decodificação e cópia.

## Como Rodar o Projeto Localmente

1. Clone o repositório:
    ```bash
    git clone https://github.com/azogh/caesar-cipher.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd caesar-cipher
    ```

3. Abra o arquivo `index.html` no seu navegador.
