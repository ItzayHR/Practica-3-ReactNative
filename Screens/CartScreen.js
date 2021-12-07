import React, {useContext} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { Header, Button,Card} from 'react-native-elements';
import {LibrosContext} from '../Context/LibrosContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CartScreen() {
  const {carrito,Comprar,total,EliminarWishList,EliminarCarroTodo} = useContext(LibrosContext);

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
    buttonContainer: {
      alignSelf: 'flex-end',
    },
    containerIcons:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
  },
    texto:{
      marginBottom:10,
      marginTop:10,
      fontSize:25,
      fontWeight:'bold',
    },
    titulo:{
      fontSize: 25
    },
  });

    return (
        <View style={styles.container}>
          <ScrollView>
            <Header
                containerStyle = {{
                backgroundColor: 'purple',
              }}
              placement = "center"
              centerComponent = {{ text: 'Cart', style: styles.Header }}
            />
              <Button
              onPress = {() => EliminarCarroTodo()}
              style = {styles.buttonContainer}
              containerStyle = {{
                position:'absolute',
                top:33,
                left:'85%'}}
              type = "clear"
              icon = {
                <Icon
                  name = "trash"
                  size = {25}
                  color = "white"
                />
              }
              />
              {
              carrito.length > 0 
              ?
              <View style = {styles.container3}>
                <Text style = {styles.texto}>Total: ${total} MXN</Text>
                <Button
                onPress = {() => Comprar()}
                title = "Comprar"
                titleStyle = {{fontSize:25, fontWeight:'bold'}}
                containerStyle = {{width:'75%'}}
                />
                { carrito.map((e,i) => {
                  return(
                      <Card  
                      containerStyle = {{
                          width: '95%',
                          marginBottom: 10
                      }} 
                      key = {i}>
                          <Card.Title style = {styles.titulo}>{e.titulo}</Card.Title> 
                          <Card.Divider/>
                          <View> 
                              <Text> Idioma: {e.idioma}</Text>     
                              <Text> Cantidad: {e.cantidad}</Text>  
                              <Text> Precio: ${e.precio} MXN</Text>
                              {e.cantidad > 1 
                              ? 
                                <Text> Total: ${e.total} MXN</Text>
                              :
                                <Text></Text>
                              }  
                              <View style = {styles.containerIcons}>
                                  <Button
                                  onPress = {()=>EliminarWishList(e)}
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

                }
              </View>    
              :
                <View style = {styles.container2}>
                  <Text style = {styles.texto}>No hay nada en el carrito :c</Text>
                </View>
              }
            </ScrollView>
        </View>
    )
}