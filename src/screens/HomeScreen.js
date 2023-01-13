// Bu kod, "HomeScreen" adında bir React Native bileşeni oluşturur 
// ve uygulamanın anasayfası olarak render edilir. Bileşen, useEffect 
// kanca kullanarak cihazın geri düğmesine dinleyen bir olay dinleyicisi
//  ekler ve geri düğmeye basıldığında kullanıcıya uygulamadan çıkmak 
//  istediğini soran bir uyarı oluşturur. Ayrıca, 'navigation' prop'unu 
//  kullanır, böylece düğmeler basıldığında diğer ekranlara geçiş yapar. 
//  Bileşen ayrıca expo-linear-gradient kütüphanesinden LinearGradient 
//  bileşenini kullanarak anasayfanın arka planı için bir gradient 
//  oluşturur. Bileşen ayrıca 'TouchableOpacity' ve 'Alert' bileşenleri 
//  kullanarak butonları ve alert diyalogları oluşturur.

import React, { useState, useEffect } from "react";
import {Text,View,TouchableOpacity,BackHandler, Alert} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from '../../Style';

const HomeScreen = ({ navigation }) => {
  const backPressed = () => {
    Alert.alert(
      'Uygulamadan Çıkış',
      'Çıkış Yapmak İstediğinizden Emin Misiniz?',
      [
        { text: 'Hayır', onPress: () => console.log('Cancel'), style: 'cancel' },
        { text: 'Evet', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );
    return true;
  }
  return (<View style={styles.container3}>
    <LinearGradient
      style={styles.containerLinear1}
      colors={["#58508d", "#003f5c"]}
      start={{ x:0 , y:0 }}
      end={{ x: 0, y:1}}
    >
      
        <Text style={styles.text1}> Mobil Uygulamama Hoşgeldiniz! </Text>

        <View style={styles.buttonView1}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Guess")}
            style={[styles.buttonstyle3, { backgroundColor: "#ff6361" }]}
          >
            <Text style={{ color: "#fff" }}>OYUNA BAŞLA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HowTo")}
            style={[styles.buttonstyle3, { backgroundColor: "#ffa600" }]}
          >
            <Text style={{ color: "#fff" }}>NASIL OYNANIR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("WhoAmI")}
            style={[styles.buttonstyle3, { backgroundColor: "#bc5090" }]}
          >
            <Text style={{ color: "#fff" }}>HAKKIMDA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => backPressed()}
            style={[styles.buttonstyle3, { backgroundColor: "#000"}]}
          >
            <Text style={{ color: "#fff" }}>ÇIKIŞ</Text>
          </TouchableOpacity>
        </View>
      
    </LinearGradient></View>
  );
};

export default HomeScreen;
