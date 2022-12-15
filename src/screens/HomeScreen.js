import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("");

  return (<View style={styles.container}>
    <LinearGradient
      style={styles.containerLinear}
      colors={["#85D6E9","#E99885"]}
      start={{ x:0 , y:0 }}
      end={{ x: 0, y:1}}
    >
      
        <Text style={styles.text1}> Mobil Uygulamama Hoşgeldiniz! </Text>

        <View style={styles.buttonView1}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Guess")}
            style={[styles.buttonstyle, { backgroundColor: "#C7D9FF" }]}
          >
            <Text style={{ color: "#fff" }}>OYUNA BAŞLA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HowTo")}
            style={[styles.buttonstyle, { backgroundColor: "#F0B2C9" }]}
          >
            <Text style={{ color: "#fff" }}>NASIL OYNANIR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("WhoAmI")}
            style={[styles.buttonstyle, { backgroundColor: "#796DCD" }]}
          >
            <Text style={{ color: "#fff" }}>HAKKIMDA</Text>
          </TouchableOpacity>
          {/* <TextInput
            style={styles.input}
            placeholder="Lütfen adınızı giriniz"
            value={playerName}
            onChangeText={(text) => setPlayerName(text)}
          />
          <Text style={styles.text3}>Merhaba {playerName}!</Text> */}
        </View>
      
    </LinearGradient></View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    textAlign: "center",
  },
  buttonstyle: {
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonView1: {
    flex: 1,
    alignSelf: "stretch",
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    // backgroundColor: "#D1D9D7",
  },
  containerLinear: {
    flex: 1,
    backgroundColor: "#4530b3",
    alignContent: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#5C5E5E",
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
});

export default HomeScreen;
