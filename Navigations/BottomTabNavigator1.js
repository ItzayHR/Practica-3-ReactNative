import React, { useContext } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native'
import {Badge} from 'react-native-elements'
import WishListScreen from '../Screens/WishListScreen';
import AccountScreen from '../Screens/AccountScreen';
import HomeScreen from '../Screens/HomeScreen';
import {LibrosContext} from '../Context/LibrosContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    const {cantidadVerificar,cantidad}= useContext(LibrosContext);
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12,
                },
                style:{
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="WishList"
                component={WishListScreen}
                options={{
                    tabBarLabel:"WishList",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"gift"} size={20} color={color}/>
                    )
                }}
            />
            {cantidad>0 ?
            <Tab.Screen
            name="Cuenta"
            component={AccountScreen}
            options={{
                tabBarLabel:"Cuenta",
                tabBarIcon:({color})=>(
                    <View>
                    <Ionicons 
                        containerStyle={{backgroundColor:'black'}}
                        name={"cart"} size={22} color={color}/>
                    <Badge
                        value={cantidadVerificar()}
                        status="error"
                        textStyle={{fontSize:8}}
                        containerStyle={{ position: 'absolute', top:-5, right:-9 }}
                    />  
                    </View>
  
                )
                }}
            />
            :
            <Tab.Screen
            name="Cuenta"
            component={AccountScreen}
            options={{
                tabBarLabel:"Cuenta",
                tabBarIcon:({color})=>(
                    <Ionicons 
                    containerStyle={{
                        position:'relative'
                    }}
                    name={"cart"} size={22} color={color}>
                    </Ionicons>
                )
                }}
            />
            }
        </Tab.Navigator>
    )
}