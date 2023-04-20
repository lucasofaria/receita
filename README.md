<h1> My Menu </h1>

App de receitas desenvolvido utilizando ReactNative. Ele utiliza requisições HTTP para 
consumir uma API “fake” com algumas receitas pré-cadastradas. Através disso podemos listar 
as receitas usando FlatList, exibir os detalhes sobre cada receita e também fazer buscas 
através do que você digita em um componente de TextInput. Também possui a opção de 
compartilhamento usando Share.

Nesse app também foi utilizada a biblioteca react-navigation que permite a configuração de 
paginas para a navegação pelos usuários, como a página Home, Favoritos, Detalhes e Busca. 

Dentro da página de Favoritos foi usado AsyncStorage, que possibilita gravar localmente as 
receitas favoritadas pelo usuário até que sejam revolvidas ou que o app seja excluído. 
