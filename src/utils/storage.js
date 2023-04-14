import AsyncStorage from '@react-native-async-storage/async-storage'

// Buscar os favoritos
// Salvar um novo favorito
// Remover um favorito da lista.

export async function getFavorites(key){
  const favorites = await AsyncStorage.getItem(key)
  return JSON.parse(favorites) || [];    
}

export async function saveFavorite(key, newItem){
  let myFavorites = await getFavorites(key);

  let hasItem = myFavorites.some( item => item.id === newItem.id)

  if(hasItem){
    console.log("ESSA RECEITA JÁ ESTÁ FAVORITADA")
    return;
  }

  myFavorites.push(newItem)

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
  console.log("SALVO COM SUCESSO")
}

export async function removeItem(id){
  let receipes = await getFavorites("@appreceitas")

  let myFavorites = receipes.filter( item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem("appreceitas", JSON.stringify(myFavorites));
  console.log("RECEITA REMOVIDA COM SUCESSO!")
  return myFavorites;
}

export async function isFavorite(receipe){
  let myReceipes = await getFavorites("@appreceitas")

  const favorite = myReceipes.find( item => item.id === receipe.id )

  if(favorite){
    return true;
  }

  return false;
}