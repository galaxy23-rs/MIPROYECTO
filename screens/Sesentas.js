import React, { Component } from 'react';
import { Text, View,Image,StyleSheet, ImageBackground,} from 'react-native';

export default class SesentasScreen extends Component {
    render() {
             return (
               <View style={styles.container}>
               
                     <ImageBackground source={require('../assets/6.jpg')} style={styles.backgroundImage}></ImageBackground>
                     <View style={styles.titleBar}>
                        <Image source={require("../assets/60.jpg")} style={{ width: 200, height: 150 }}></Image>
                        <Image source={require("../assets/60s.jpg")} style={styles.routeImage}></Image>
                        
                    
                     
                     <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                     
                  
                 
                     <Text style={styles.topicText}>                                   Esta temporada vuelve a las calles uno de los estilos más únicos del siglo XX, el estilo de los años 60. 
                     La moda de los años 60 se caracteriza por un toque divertido e incluso un poco infantil donde las minifaldas, las botas blancas y los vestidos babydoll eran las prendas protagonistas.

Iconos como Audrey Hepburn, Jackie Kennedy o Catherine Deneuve son algunos de los referentes del estilo de los años 60. Y esta temporada 2022, marcas como Chanel, Valentino y Giambattista Valli 
han apostado muy fuerte por la vuelta de esta moda.

Las prendas imprescindibles del estilo de los años 60
El estilo de los años 60 incluye tanto prendas de la moda “little girl”, con un toque inocente, como de la moda “psicodélica”, donde destacan las formas geométricas. Pero si tenemos que decantarno
s por las cinco prendas más características de este estilo que volverán esta temporada, nuestras Personal Shoppers han elegido las siguientes: 1.La minifalda, símbolo de atrevimiento 2.Los míticos pantalones campana 3.Vestidos babydoll, la comodidad hecha prenda 4.Botas blancas para darle personalidad a tu pisada 5.La revolución del smoking </Text>
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











