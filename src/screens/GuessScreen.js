import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
const GuessScreen = () => {
  const [correctNumber, setCorrectNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [numGuesses, setNumGuesses] = useState(0);
  const [result, setResult] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [records, setRecords] = useState([]);

  const onChangePlayerName = (text) => setPlayerName(text);

  const submitRecord = () => {
    setRecords([...records, { playerName, bestScore }]);
  };

  const resetGame = () => {
    setCorrectNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setNumGuesses(0);
    setResult("");
    setGuesses([]);
    //setBestScore(0);
  };

  const onChangeText = (text) => setGuess(text);

  const onSubmit = () => {
    if (numGuesses >= 10) {
      setResult("Oyun Bitti! Doğru sayı:  " + correctNumber);
      return;
    }

    if (guess == correctNumber) {
      if (numGuesses + 1 < bestScore || bestScore === 0) {
        setBestScore(numGuesses + 1);
      }
      setResult(
        "Tebrikler,doğru tahmin ettiniz!" +
          (numGuesses + 1) +
          ". defada sayıyı bildiniz!"
      );

      return;
    }

    if (guess > correctNumber) {
      setResult("Daha Küçük ");
    } else {
      setResult("Daha Büyük ");
    }
    setNumGuesses(numGuesses + 1);
    setGuesses([...guesses, guess]);
  };
  const luckyPress = () => {
    Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

  const deadPress = () => {
    Linking.openURL("https://www.youtube.com/watch?v=j9V78UbdzWI&t=6s");
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
          <Text style={styles.text1}>Sayı Tahmin Oyununa Hoşgeldiniz!</Text>
          <Text style={styles.text2}>
            En fazla 10 tahminde 1 ile 100 arasında bir sayıyı tahmin etmeye
            çalışın.
          </Text>
          <Text style={styles.text3}>Best score: {bestScore}</Text>
          <Text style={styles.text5}>Sayıyı Tahmin Edin</Text>
          <TextInput
            style={styles.input}
            placeholder="Tahmininizi Girin: "
            onChangeText={onChangeText}
            value={guess}
          />
          <TouchableOpacity
            onPress={onSubmit}
            style={[styles.buttonstyle, { backgroundColor: "#ff6361" }]}
          >
            <Text style={{ color: "#fff" }}>TAHMİN ET</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 15,
              marginRight: 15,
              textAlign: "center",
            }}
          >
            {result}
          </Text>

          {bestScore === 1 && (
            <TouchableOpacity
              onPress={luckyPress}
              style={[styles.buttonstyle, { backgroundColor: "#bc5090" }]}
            >
              <Text style={{ color: "#fff" }}>TEK TAHMİN ÖDÜLÜ</Text>
            </TouchableOpacity>
          )}
          {numGuesses >= 10 && (
            <TouchableOpacity
              onPress={deadPress}
              style={[styles.buttonstyle, { backgroundColor: "#000" }]}
            >
              <Text style={{ color: "#fff" }}>GEÇMİŞ OLSUN</Text>
            </TouchableOpacity>
          )}
          <ScrollView>
            {/* Buraya bak FlatListle oluştur*/}
            {guesses.map((guess, index) => (
              <Text style={styles.text2} key={index}>
                Tahmin {index + 1}: {guess}
              </Text>
            ))}
          </ScrollView>
          <TouchableOpacity
            onPress={resetGame}
            style={[styles.buttonstyle, { backgroundColor: "#ffa600" }]}
          >
            <Text style={{ color: "#fff" }}>BAŞTAN BAŞLA</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Player Name"
            value={playerName}
            onChangeText={onChangePlayerName}
          />
          <TouchableOpacity
            onPress={submitRecord}
            style={[styles.buttonstyle, { backgroundColor: "#bc5090" }]}
          >
            <Text style={{ color: "#fff" }}>SKORUNU KAYDET</Text>
          </TouchableOpacity>
          {/* Buraya bak FlatListle oluştur*/}
          {records.map(
            (record, index) =>
              record.bestScore > 0 && (
                <Text style={styles.text2} key={index}>
                  Player {record.playerName}: {record.bestScore} defada bildi
                </Text>
              )
          )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    textAlign: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 15,
  },
  buttonstyle: {
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignContent: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "#D1D9D7",
  },
  containerLinear: {
    flex: 1,
    backgroundColor: "#4530b3",
    alignContent: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#ffa600",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 25,
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
  text3: {
    color: "#ffa600",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  text4: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
  text5: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});

export default GuessScreen;
