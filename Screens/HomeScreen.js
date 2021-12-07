import React, {useContext} from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { Header, Card, Button } from 'react-native-elements';
import {LibrosContext} from '../Context/LibrosContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    const {catalogo, AgregarWishList, AgregarCarro} = useContext(LibrosContext);
    return (
        <ScrollView>
            <Header
              containerStyle={{
                backgroundColor: 'purple',
              }}
              placement="center"
              centerComponent={{ text: 'HOME', style: styles.header }}
            />
        <View style={styles.container}>
            {catalogo.map((e,i)=>{
                return(
                    <Card  
                    containerStyle={{
                        width: '95%',
                        marginBottom: 10
                    }} 
                    key={i}>
                        <Card.Title style={styles.titulo}>{e.titulo}</Card.Title> 
                        <Card.Divider/>
                        <View>
                            <Text> Precio: ${e.precio} MXN</Text>
                            <Text> Idioma: {e.idioma}</Text>
                            <View style={styles.containerIcons}>
                                <Button
                                onPress={
                                    ()=> AgregarCarro(e)
                                }
                                type="clear"
                                icon={
                                  <Icon
                                    name="shopping-cart"
                                    size={25}
                                    color="purple"
                                  />
                                }
                                />
                                <Button
                                onPress={()=> (
                                AgregarWishList(e)
                                )}
                                type="clear"
                                icon={
                                  <Icon
                                    name="heart"
                                    size={25}
                                    color={e.color}
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

                    
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#CCC',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    header: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    containerIcons:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    titulo:{
      fontSize: 25
    },
});