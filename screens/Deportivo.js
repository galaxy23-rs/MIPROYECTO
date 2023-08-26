import React, { Component } from 'react';
import { Text, View,Image,StyleSheet, ImageBackground,} from 'react-native';

export default class DeportivoScreen extends Component {
    render() {
             return (
               <View style={styles.container}>
               
                     <ImageBackground source={require('../assets/dep.jpg')} style={styles.backgroundImage}></ImageBackground>
                     <View style={styles.titleBar}>
                        <Image source={require("../assets/de.jpg")} style={{ width: 200, height: 150 }}></Image>
                        <Image source={require("../assets/deport.jpg")} style={styles.routeImage}></Image>
                        
                    
                     
                     <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                     
                  
                 
                     <Text style={styles.topicText}>                                                 La moda deportiva está en constante evolución gracias a la tendencia athleisure, que se refiere al look casual que llevas al gimnasio y te acompaña en tu agenda du jour.

Si eres una amante del deporte y el estilo, estás de suerte, porque hoy te traigo las seis tendencias más in que están arrasando en el mundo del deporte. 

Estampado arcoíris (Rainbow): ¿Quién dijo que el negro era el único tono válido en la ropa deportiva? Combinar colores y diferentes tonalidades se ha convertido en uno de looks
 deportivos más populares entre fashionistas. Piensa en leggings, monos con detalles en los laterales (como el modelo de Port de Bras), joggers, tops y sudaderas en colores vivos.
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