// Bu kod, "HowToScreen" adında bir React Native bileşenini oluşturur ve 
// "GuessScreen" oyununun nasıl oynandığını gösterir. Talimatlar "instructions" 
// adında bir dizi olarak saklanır ve FlatList bileşeni kullanılarak görüntülenir. 
// Talimatlar ScrollView kullanılarak görüntülenir ve kullanıcının talimatları 
// kaydırmasına izin verir. Bileşen ayrıca expo-linear-gradient kütüphanesinden 
// LinearGradient bileşenini kullanarak oyun ekranının arka planı için bir gradient 
// oluşturur. Bileşen sadece ekranda metin görüntüler ve kullanıcı girdisi işlememektedir.

import React from "react";
import { Text, View,ScrollView,FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from '../../Style';


const HowToScreen = () => {
  const instructions = ["En fazla 10 tahminde 1 ile 100 arasında bir sayıyı tahmin etmeye çalışın.\n Her tahmin yaptığınızda, kaydırılabilir bir listede kaçıncı tahmininizde hangi sayıyı tahmin ettiğinizi  görebilirsiniz. \nHer yanlış tahminde daha küçük ya da daha büyük yönlendirmelerini görebilirsiniz.\nTahmininiz doğru çıktığındaysa tebrik mesajıyla beraber sayıyı kaçıncı tahminde bildiğinizi görebilirsiniz.\n Best Score yaptıktan sonra kaydetmek istediğiniz her skoru isterseniz gireceğiniz isimle kaydetebilirsiniz.\nUmarım çıkacak sürprizleri seversiniz!\nBol Şanslar!"]
  return (
    <View style={styles.container4}>
      <LinearGradient
      style={styles.containerLinear1}
      colors={["#58508d", "#003f5c"]}
      start={{ x:0 , y:0 }}
      end={{ x: 0, y:1}}
    >
      <Text style={styles.text1}>Sayı Tahmin Oyunu Nasıl Oynanır?</Text>
      <FlatList data= {instructions} renderItem={({item,index})=><Text key={index} style={styles.text2}>{item}</Text>} />
      </LinearGradient>
    </View>
  );
};

export default HowToScreen;
