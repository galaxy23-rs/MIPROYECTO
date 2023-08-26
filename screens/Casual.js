
import React, { Component } from 'react';
import { Text, View,Image,StyleSheet, ImageBackground,} from 'react-native';

export default class CasualScreen extends Component {
    render() {
             return (
               <View style={styles.container}>
               
                     <ImageBackground source={require('../assets/ca.jpg')} style={styles.backgroundImage}></ImageBackground>
                     <View style={styles.titleBar}>
                        <Image source={require("../assets/cas.jpg")} style={{ width: 200, height: 150 }}></Image>
                        <Image source={require("../assets/casual.jpg")} style={styles.routeImage}></Image>
                        
                    
                     
                     <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                     
                  
                 
                     <Text style={styles.topicText}>                                                     La ropa casual es la ropa informal: es decir, aquella que se 
                                                          utiliza en contextos que no exigen el respeto de un código de vestimenta formal.
                      A la hora de escoger ropa casual para vestirse, por lo tanto, una persona no se ata a criterios
                       rígidos de elegancia ni se preocupa por lograr un aspecto de seriedad.
                       Para poder llevar ropa casual y lucir este estilo, los expertos establecen que hay que seguir estos consejos fundamentales:

-Entre sus prendas básicas están los pantalones vaqueros, las camisetas básicas, las blusas, los zapatos planos, los blazers y los vestidos cortos.

-Los colores que se deben utilizar son fundamentalmente el negro, el azul, el blanco, el marrón y el caqui.

-Este look se identifica con cuatro pilares claves: simplicidad, naturalidad, comodidad y elegancia.

-Las zapatillas tipo Converse o de marcado estilo urban son piezas también importantes y fundamentales en el armario de cualquier persona que desee vestir con un estilo casual.

-Hay que apostar de manera frecuente por el empleo de complementos y accesorios de todo tipo como pueden ser fulares, pañuelos, sombreros…

-La máxima a cumplir con este look es una: hay que ser uno mismo y transmitirlo a través de la ropa.

Ver también: Blazer

Cuándo se usa ropa casual
La ropa que una mujer elige para salir a hacer compras por su barrio o que utiliza un hombre cuando lleva el automóvil al taller mecánico, por citar dos situaciones, es ropa casual. En cambio, cuando la misma mujer va a su oficina y el hombre asiste a un acto protocolar, apelan a otro tipo de vestimenta.

Un pantalón deportivo o un vaquero (jean), una camiseta de un grupo de rock, un buzo o sudadera y una campera impermeable son algunas de las prendas que forman parte de la ropa casual. </Text>
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