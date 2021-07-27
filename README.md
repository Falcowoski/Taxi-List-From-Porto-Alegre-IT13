# RESUMO

Um software simples que lista e localiza pontos de taxi próximos do usuário em Porto Alegre - Rio Grande do Sul.
É desenvolvido em `JavaScript` e executável por meio do `Node.js`

# REQUISITOS
## 1. Ambiente de Execução: [`Node.js`](https://nodejs.org/en/)
## 2. Módulos: [`Prompt-Sync`](https://www.npmjs.com/package/prompt-sync) [`Colors`](https://www.npmjs.com/package/colors)

Para instalar os módulos automáticamente, entre na pasta raiz do diretório e insira o comando abaixo no CMD.
```sh
npm install
```

# FUNÇÕES

## 1. Listar todos os pontos de taxi &#9745;
> Os pontos são obtidos a partir de um arquivo *CSV*, que foi convertido em um *array* por um programa externo.
    Todos os pontos de taxi utilizados no programa estão disponíveis em **data.js**.
    
## 2. Informar minha localização &#9745;
> A localização do usuário é inserida manualmente em formato *geodésico decimal*.

## 3. Encontrar pontos próximos &#9744;
> Por meio da localização inserida na função anterior, o sistema calcula e entrega os três pontos de taxi mais próximos do do usuário, junto com a distância estimada *(Fórmula de Haversine)* até eles.

## 4. Buscar pontos por logradouro &#9744;
> Permite que o usuário insira o nome completo de um logradouro *(endereço)*, retornando todos os pontos de taxi localizados naquele endereço.
