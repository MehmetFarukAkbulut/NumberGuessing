import React from "react";
import { Text, StyleSheet, View,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HowToScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
      style={styles.containerLinear}
      colors={["#282763","#d13670"]}
      start={{ x:0 , y:0 }}
      end={{ x: 0, y:1}}
    >
    <ScrollView>
      <Text style={styles.text1}>Sayı Tahmin Oyunu Nasıl Oynanır!</Text>
      <Text style={styles.text2}>{" En fazla 10 tahminde 1 ile 100 arasında bir sayıyı tahmin etmeye çalışın. "}
      </Text>
      <Text style={styles.text2}>
        {"Her tahmin yaptığınızda, kaydırılabilir bir listede kaçıncı tahmininizde hangi sayıyı tahmin ettiğinizi  görebilirsiniz."}
      </Text>
      <Text style={styles.text2}>
        {"Her yanlış tahminde daha küçük ya da daha büyük yönlendirmelerini görebilirsiniz."}
      </Text>
      <Text style={styles.text2}>
        {"Tahmininiz doğru çıktığındaysa tebrik mesajıyla beraber sayıyı kaçıncı tahminde bildiğinizi görebilirsiniz."}
      </Text>
      <Text style={styles.text2}>
        {"Best Score yaptıktan sonra kaydetmek istediğiniz her skoru isterseniz gireceğiniz isimle kaydetebilirsiniz. "}
      </Text>
      <Text style={styles.text2}>
        {"Umarım çıkacak sürprizleri seversiniz!"}

      </Text>
      <Text style={styles.text2}> {"Bol Şanslar!"} </Text>
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
