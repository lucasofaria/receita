import {View, Text, StyleSheet} from 'react-native';

export function Favorites(){
  return(
    <View style={styles.container}>
      <Text>Pagina de Favoritos</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 35,
    padding: 20
  }
})