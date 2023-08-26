import React, { Component } from 'react';
import { Text, View,Image,StyleSheet, ImageBackground,} from 'react-native';

export default class  DarkScreen extends Component {
    render() {
             return (
               <View style={styles.container}>
               
                     <ImageBackground source={require('../assets/darkk.jpg')} style={styles.backgroundImage}></ImageBackground>
                     <View style={styles.titleBar}>
                        <Image source={require("../assets/da.jpg")} style={{ width: 200, height: 150 }}></Image>
                        <Image source={require("../assets/dark.jpg")} style={styles.routeImage}></Image>
                        
                    
                     
                     <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                     
                  
                 
                     <Text style={styles.topicText}>                                                     De todos los tipos de 'aesthetic' que existen, hay uno que destaca por ser la unión más armónica 
                     entre la oscuridad y el romanticismo. Se llama 'Dark Academia' y es el reclamo de moda favorito de la nostálgicas esta temporada. La realidad es que este tipo de moda es, en realidad, una forma de vida, parte de un universo tan
                      misterioso como atractivo y que, por suerte para sus usuarias, no puede ser más tendencia este otoño/invierno.

Te contamos todo lo que sabemos sobre la 'aesthetic' que arrasa en Pinterest. 
En esta subcultura que Pinterest ha convertido en algo de lo más 'chic' no tienen cabida colores vivos (ni mucho menos). En cambio, triunfan la paleta de nuestros como el negro, 
el marrón chocolate y el gris, pero también estampados con acento británico como es el tartán escocés, el príncipe de Gales o la pata de gallo. Estos protagonizan un sinfín de prendas de corte sobrio, pero romántico. En cuanto a accesorios, destacan los lazos en el pelo, 
los calcetines altos, los mocasines y los zapatos 'Oxford'. </Text>
                     </View> 
   
        </View>

        )

    }
}
const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   
    titleText: {
       color: "red",
       flex: 1,
    justifyContent:"strech",
     alignItems: "flex-start",
     fontSize: 25,
        
    },
    topicText: {
        color: "black",
        flex: 1,
     justifyContent:"space-between",
      alignItems: "center ",
      fontSize: 30,
      alignContent: 'center'
         
     },
     titleBar: {
      flex: 0.5,
      top: 50,
      left: 50,
      //justifyContent: "left",
      //alignItems: "left"
     },
     backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
     },
     routeImage: {
      position: "absolute",
      top: -40,
      right: 15,
      height: 180,
      width: 200,
      resizeMode: "contain"
  }
     
})