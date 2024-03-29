// Bu React Native kodu, uygulamayı yazan kişi hakkında bilgi sağlar. 
// Kod, yazara ait bilgileri (ad, okul, öğrenim durumu vb.) içeren bir 
// metin ve yazara ait sosyal medya profillerine (Instagram, LinkedIn, 
//   Github) erişebilmek için butonlar içermektedir. Kod ayrıca, 
//   uygulamayı kullanıcıya beğendiyse ve yazara geri dönüş yapmak 
//   istiyorsa, e-posta gönderebilme özelliğini de içermektedir. Bu 
//   özellik sadece telefonun e-posta uygulaması yüklüyse çalışacaktır.

import React, { useState, useEffect } from "react";
import {styles} from '../../Style';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as MailComposer from "expo-mail-composer";

const WhoAmIScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: "React Native uygulaman bir harika!",
      body: "Uygulamanı çok beğendim!",
      recipients: ["mefarukakbulut@gmail.com"],
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
    }, 20);
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
    <View style={styles.container2}>
      <LinearGradient
        style={styles.containerLinear1}
        colors={["#58508d", "#003f5c"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView>
          <Text style={styles.text6}>{text}</Text>
        </ScrollView>
        <TouchableOpacity
          onPress={instagram}
          style={[styles.buttonstyle2, { backgroundColor: "#F77737" }]}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>INSTAGRAM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={linkedin}
          style={[styles.buttonstyle2, { backgroundColor: "#0072b1" }]}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>LINKEDIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={github}
          style={[styles.buttonstyle2, { backgroundColor: "#171515" }]}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>GITHUB</Text>
        </TouchableOpacity>
        {isAvailable ? (
          <TouchableOpacity
            onPress={sendMail}
            style={[styles.buttonstyle2, { backgroundColor: "#bc5090" }]}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>
              SEND MAIL
            </Text>
          </TouchableOpacity>
        ) : (
          <Text>Email Kullanılabilir Değil</Text>
        )}
      </LinearGradient>
    </View>
  );
};

export default WhoAmIScreen;
