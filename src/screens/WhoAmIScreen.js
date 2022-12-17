import React, { useState, useEffect } from "react";
import {Text,StyleSheet,ScrollView,View,Linking,TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as MailComposer from 'expo-mail-composer';

const WhoAmIScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

  const sendMail =() =>{
    MailComposer.composeAsync({
      subject: "React Native uygulaman bir harika!",
      body: "Uygulamanı çok beğendim!",
      recipients: ["mefarukakbulut@gmail.com"]
    });
  };
  const LONG_TEXT =
    "Benim adım Mehmet Faruk Akbulut. Trakya Üniversitesinde, Bilgisayar Mühendisliği bölümü öğrencisiyim. Bu Sayı Tahmin Oyunu benim Mobil uygulama dersi final ödevim. Umarım keyif almışsınızdır. Uygulamanın kodlarını aşağıdaki Github hesabımdan bulabilirsiniz. Bana aşağıdaki hesaplarımdan ulaşabilirsiniz. Geri dönüşlerinizi bekliyorum...";
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (text.length >= LONG_TEXT.length) {
        clearInterval(timer);
        return;
      }
      setText(text + LONG_TEXT[text.length]);
    }, 1);
    return () => clearInterval(timer);
  }, [text]);

  const instagram = () => {
    Linking.openURL("https://www.instagram.com/mfaruk_akbulut/");
  };
  const linkedin = () => {
    Linking.openURL(
      "https://www.linkedin.com/in/mehmet-faruk-akbulut-692340236/"
    );
  };
  const github = () => {
    Linking.openURL("https://github.com/MehmetFarukAkbulut");
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.containerLinear}
        colors={["#58508d", "#003f5c"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView>
          <Text style={styles.text6}>{text}</Text>
        </ScrollView>
        <TouchableOpacity
          onPress={instagram}
          style={[styles.buttonstyle, { backgroundColor: "#F77737" }]}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>INSTAGRAM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={linkedin}
          style={[styles.buttonstyle, { backgroundColor: "#0072b1" }]}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>LINKEDIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={github}
          style={[styles.buttonstyle, { backgroundColor: "#171515" }]}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>GITHUB</Text>
        </TouchableOpacity>
        {isAvailable ? 
        <TouchableOpacity
          onPress={sendMail}
          style={[styles.buttonstyle, { backgroundColor: "#bc5090" }]}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>SEND MAIL</Text>
        </TouchableOpacity> : <Text>Email Kullanılabilir Değil</Text>}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView1: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff0f5",
  },
  containerLinear: {
    flex: 1,
    backgroundColor: "#4530b3",
    alignContent: "center",
    justifyContent: "center",
  },
  buttonstyle: {
    alignSelf: "stretch",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
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
  text5: {
    color: "#1561ad",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  text6: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 15,
  },
});

export default WhoAmIScreen;
