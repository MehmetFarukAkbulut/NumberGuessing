import React from "react";
import { Text, StyleSheet, View,ScrollView,FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const HowToScreen = () => {
  const instructions = ["En fazla 10 tahminde 1 ile 100 arasında bir sayıyı tahmin etmeye çalışın.\n Her tahmin yaptığınızda, kaydırılabilir bir listede kaçıncı tahmininizde hangi sayıyı tahmin ettiğinizi  görebilirsiniz. \nHer yanlış tahminde daha küçük ya da daha büyük yönlendirmelerini görebilirsiniz.\nTahmininiz doğru çıktığındaysa tebrik mesajıyla beraber sayıyı kaçıncı tahminde bildiğinizi görebilirsiniz.\n Best Score yaptıktan sonra kaydetmek istediğiniz her skoru isterseniz gireceğiniz isimle kaydetebilirsiniz.\nUmarım çıkacak sürprizleri seversiniz!\nBol Şanslar!"]
  return (
    <View style={styles.container}>
      <LinearGradient
      style={styles.containerLinear}
      colors={["#282763","#d13670"]}
      start={{ x:0 , y:0 }}
      end={{ x: 0, y:1}}
    >
      <Text style={styles.text1}>Sayı Tahmin Oyunu Nasıl Oynanır!</Text>
      <FlatList data= {instructions} renderItem={({item,index})=><Text key={index} style={styles.text2}>{item}</Text>} />
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    
  },
  containerLinear: {
    flex: 1,
    backgroundColor: "#4530b3",
    alignContent: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#dbd094",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
    textAlign: "center",
  },
  text2: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "100",
    marginLeft: 25,
    marginRight: 15,
    textAlign: "center",
  },
  text3: { fontSize: 20, fontWeight: "bold", textAlign: "center" },
  text4: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
});

export default HowToScreen;
