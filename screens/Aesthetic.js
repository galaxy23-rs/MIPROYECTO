import React, { Component } from 'react';
import { Text, View,Image,StyleSheet, ImageBackground,} from 'react-native';

export default class AestheticScreen extends Component {
    render() {
             return (
               <View style={styles.container}>
               
                     <ImageBackground source={require('../assets/aes.jpg')} style={styles.backgroundImage}></ImageBackground>
                     <View style={styles.titleBar}>
                        <Image source={require("../assets/aesth.jpg")} style={{ width: 200, height: 150 }}></Image>
                        <Image source={require("../assets/aesthe.jpg")} style={styles.routeImage}></Image>
                        
                    
                     
                     <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                     
                  
                 
                     <Text style={styles.topicText}>                     Las corrientes estilísticas en tendencia van evolucionando a lo largo del tiempo, aunque hay una que nos lleva acompañando una temporada y merece ser mencionada: la ‘aesthetic’. Su traducción literal al castellano es ‘estética’, haciendo referencia a algo que nos produce placer a la vista, sea de la manera que sea. Sin embargo, este conjunto tan general de rasgos o peculiaridades se han ido especificando últimamente.

Ya no se considera ‘aesthetic’ todo lo que sea bonito o luzca bien, pese a que sí abarca muchos detalles. Pero hay ciertas características a cumplir. 
Las hemos descifrado y lo mejor de todo es que puedes aplicarlas a tu armario, a la forma en la que tienes decorada tu casa, al contenido que publicas en redes sociales e
 incluso el fondo de pantalla de tu móvil. ¡A toda tu vida! Porque sí, amiga, vivir en este ‘mood’ siempre es mucho mejor.
 Si quieres empezar a tener un armario ‘aesthetic’ no deben faltar las siguientes piezas. Para la parte superior, destacan las sobrecamisas de cuadros, camisetas y sudaderas ‘oversize’ y los ‘crop tops’ de estilo ‘bandeau’.
  Estos se combinan con pantalones ciclistas, chándal, faldas de cuadros escolares y pantalones ‘wide leg’ (es decir, muy anchos). 
  Además los accesorios estrella son el bolso baguette, calcetines con zapatillas de moda tipo Nike Air Force 1 o Jordan, este otoño 2023 en tono holográfico, y los ‘scrunchies’ para el pelo.
   Encontrarás la inspiración que necesitas en Hailey Bieber o en las estrellas de TikTok.
 </Text>
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