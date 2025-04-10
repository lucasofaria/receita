
# 🍲 My Menu

**My Menu** é um app mobile feito com React Native, criado para quem ama cozinhar (ou está aprendendo!). Ele permite consultar receitas, assistir vídeos de preparo, salvar suas favoritas com armazenamento local e até compartilhar com a galera.

## ✨ Funcionalidades

- Busca de receitas por nome
- Visualização de vídeos das receitas
- Marcar receitas como favoritas
- Compartilhamento de receitas com outras pessoas
- Detalhes completos das receitas, incluindo ingredientes e modo de preparo


## 📱 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [TypeScript](https://www.typescriptlang.org/)
## 🚀 Instalação

1. Clone o repositório:
```bash
  git clone https://github.com/lucasofaria/receita.git
```

2. Acesse a pasta do projeto:
```bash
  cd receita
```

3. Instale as dependências:
```bash
  npm install
```

4. Inicie o projeto com o Expo:
```bash
  npx expo start
```

É necessário ter o Expo CLI instalado. Caso não tenha:
```bash
  npm install -g expo-cli
```
## 🤝 Contribuindo

Fique à vontade para contribuir com melhorias, sugestões ou reportar bugs por meio de issues ou pull requests!


## 📌 Observações

- As receitas favoritas são armazenadas localmente usando AsyncStorage.
- O app já está finalizado, mas melhorias futuras são bem-vindas.<h1> My Menu </h1>

App de receitas desenvolvido utilizando ReactNative. Ele utiliza requisições HTTP para 
consumir uma API “fake” com algumas receitas pré-cadastradas. Através disso podemos listar 
as receitas usando FlatList, exibir os detalhes sobre cada receita e também fazer buscas 
através do que você digita em um componente de TextInput. Também possui a opção de 
compartilhamento usando Share.

Nesse app também foi utilizada a biblioteca react-navigation que permite a configuração de 
paginas para a navegação pelos usuários, como a página Home, Favoritos, Detalhes e Busca. 

Dentro da página de Favoritos foi usado AsyncStorage, que possibilita gravar localmente as 
receitas favoritadas pelo usuário até que sejam revolvidas ou que o app seja excluído. 
