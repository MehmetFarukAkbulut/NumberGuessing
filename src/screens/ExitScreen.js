import React, { useState, useEffect } from "react";
import {Text,StyleSheet,ScrollView,View,Linking,Button,TouchableOpacity,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const ExitScreen = () => {
  
  return (
    <View style={styles.container}>
      <LinearGradient
      style={styles.containerLinear}
      colors={["#282763","#d13670"]}
      start={{ x:0 , y:0 }}
      end={{ x: 0, y:1}}
    >
      
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
    borderRadius: 15,
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

export default ExitScreen;
