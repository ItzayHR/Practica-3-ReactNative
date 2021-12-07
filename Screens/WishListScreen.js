import React, {useContext} from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { Header, Card, Button } from 'react-native-elements';
import {LibrosContext} from '../Context/LibrosContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SettingsScreen() {
   const {wishList, AgregarWishList,AgregarCarro} = useContext(LibrosContext);

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
    },
    container2: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'space-around',
    },
    container3: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'space-around',
    },
    Header: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    containerIcons:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    texto:{
      fontSize:22,
      fontWeight:'bold',
    },
    titulo:{
      fontSize:25,
    }
  });

    return (
        <View style = {styles.container}>
          <ScrollView>
            <Header
                containerStyle = {{
                backgroundColor: 'purple',
              }}
              placement = "center"
              centerComponent={{ text: 'WISHLIST', style:styles.Header }}
            />
            <View style = {styles.container3}>
              { 
              wishList.length > 0  
              ?
              wishList.map((e,i) => {
                  return(
                      <Card  
                      containerStyle={{
                          width: '95%',
                          marginBottom: 10
                      }} 
                      key={i}>
                          <Card.Title style = {styles.titulo}>{e.titulo}</Card.Title> 
                          <Card.Divider/>
                          <View>
                              <Text> Precio: ${e.precio} MXN</Text>
                              <Text> Idioma: {e.idioma}</Text>
                              <View style = {styles.containerIcons}>
                                  <Button
                                  onPress = {
                                      ()=> AgregarCarro(e)
                                  }
                                  type = "clear"
                                  icon = {
                                    <Icon
                                      name = "shopping-cart"
                                      size = {25}
                                      color = "purple"
                                    />
                                  }
                                  />
                                  <Button
                                  onPress = {() => (AgregarWishList(e))}
                                  type = "clear"
                                  icon = {
                                    <Icon
                                      name = "trash"
                                      size = {25}
                                      color = "red"
                                    />
                                  }
                                  />
                              </View>
                          </View>
                      </Card>
                  );
              })
              :
              <View style = {styles.container2}>
                <Text style = {styles.texto}>No se ha agregado nada a la lista de deseados :c</Text>
              </View>
              }
            </View>
        </ScrollView>
      </View>
        
    )
}