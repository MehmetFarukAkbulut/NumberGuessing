import React from "react";
import { Text, StyleSheet, View,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HowToScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
      style={styles.containerLinear}
      colors={["#85D6E9","#E99885"]}
      start={{ x:0 , y:0 }}
      end={{ x: 0, y:1}}
    >
    <ScrollView>
      <Text style={styles.text1}>Sayı Tahmin Oyunu Nasıl Oynanır!</Text>
      <Text style={styles.text2}>{" En fazla 10 tahminde 1 ile 100 arasında bir sayıyı tahmin etmeye çalışın. "}
      </Text>
      <Text style={styles.text2}>
        {"Her tahmininizde tahmin sayısını ve hangi tahminleri yaptığınızı görebilirsiniz."}
      </Text>
      <Text style={styles.text2}>
        {"Her yanlış tahminde daha küçük ya da daha büyük yönlendirmelerini görebilirsiniz."}
      </Text>
      <Text style={styles.text2}>
        {"Tahmininiz doğru çıktığındaysa sayıyı kaçıncı tahminde bildiğinizi görebilirsiniz."}
      </Text>
      <Text style={styles.text2}>
        {"Kaydetmek istediğiniz her skoru kaydetebilirsiniz. "}
      </Text>
      <Text style={styles.text2}>
        {"Gerçekten şanslıysanız ilk tahminde bilirsiniz. "}

      </Text>
      <Text style={styles.text2}> Bol Şanslar! </Text>
      </ScrollView></LinearGradient>
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
    color: "#1561ad",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
  },
  text2: {
    fontSize: 15,
    fontWeight: "100",
    marginLeft: 15,
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
