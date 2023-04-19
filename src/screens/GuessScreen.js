// Bu kod, "GuessScreen" adında bir React Native bileşenini oluşturur 
// ve kullanıcının 1 ile 100 arasında bir sayıyı 10 tahmin veya daha azda 
// tahmin etmeye çalıştığı bir oyunu yaratır. Bileşen useState hook'unu 
// kullanarak oyunun durumunu yönetir, doğru sayı, kullanıcının mevcut 
// tahmini, yapılan tahmin sayısı, tahminin sonucu, önceki tahminlerin 
// bir dizisi, en iyi skor, oyuncunun adı ve kayıtların bir dizisi dahil. 
// Bileşen ayrıca metin girişini işleme, bir tahmin yapmayı, oyunu 
// sıfırlamayı ve belirli düğmelerine basıldığında dış web sitelerine 
// bağlantı kurmayı işleyen birçok işlev de içermektedir. Bileşen ayrıca 
// expo-linear-gradient kütüphanesinden LinearGradient bileşenini 
// kullanarak oyun ekranının arka planı için bir gradient oluşturur.

import React, { useState } from "react";
import {styles} from '../../Style';
import {
  View,
  Text,
  TextInput,
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
  const [displayAllGuesses, setDisplayAllGuesses] = useState(false);

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
    setDisplayAllGuesses(false);
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
        "Tebrikler,doğru tahmin ettiniz! " +
          (numGuesses + 1) +
          ". defada sayıyı bildiniz!"
      );

      return;
    }
    if (101> guess && guess>0) {
    if (guess > correctNumber) {
      setResult("Daha Küçük ");
    } else {
      setResult("Daha Büyük ");
    }}
    else {
      setResult("Yanlış Değer Girdiniz ");
    }
    if (101> guess && guess>0) {
     
    setNumGuesses(numGuesses + 1);
    setGuesses([...guesses, guess]);
  }};
  const toggleGuesses = () => {
    setDisplayAllGuesses(!displayAllGuesses);
  };
  const luckyPress = () => {
    Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

  const deadPress = () => {
    Linking.openURL("https://www.youtube.com/watch?v=j9V78UbdzWI&t=6s");
  };

  return (
    <View style={styles.container1}>
      <LinearGradient
        style={styles.containerLinear1}
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
          <View style={[styles.buttonstyle1]}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Tahmininizi Girin: "
            onChangeText={onChangeText}
            value={guess}
          />
          </View>
          <TouchableOpacity
            onPress={onSubmit}
            style={[styles.buttonstyle1, { backgroundColor: "#ff6361" }]}
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
              style={[styles.buttonstyle1, { backgroundColor: "#bc5090" }]}
            >
              <Text style={{ color: "#fff" }}>TEK TAHMİN ÖDÜLÜ</Text>
            </TouchableOpacity>
          )}
          {numGuesses >= 10 && (
            <TouchableOpacity
              onPress={deadPress}
              style={[styles.buttonstyle1, { backgroundColor: "#000" }]}
            >
              <Text style={{ color: "#fff" }}>GEÇMİŞ OLSUN</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={toggleGuesses}>
          <Text style={[styles.text2, { color: "#ffa600" }]}>
            {displayAllGuesses ? "Tahminleri gizle" : "Tahminleri göster "}
          </Text>
        </TouchableOpacity>
        <ScrollView>
          {displayAllGuesses ? (
            <View>
              {guesses.map((guess, index) => (
                <Text key={index} style={styles.text2}>
                   Tahmin {index + 1}: {guess}
                </Text>
              ))}</View>
              ) : (
                <Text style={styles.text2}>Son Tahmin: {guesses[guesses.length - 1]}</Text>
              )}
            </ScrollView>
          <TouchableOpacity
            onPress={resetGame}
            style={[styles.buttonstyle1, { backgroundColor: "#ffa600" }]}
          >
            <Text style={{ color: "#fff" }}>BAŞTAN BAŞLA</Text>
          </TouchableOpacity>
          <View style={[styles.buttonstyle1]}>
          <TextInput
            style={styles.input}
            placeholder="Player Name"
            value={playerName}
            onChangeText={onChangePlayerName}
          />
          </View>
          <TouchableOpacity
            onPress={submitRecord}
            style={[styles.buttonstyle1, { backgroundColor: "#bc5090" }]}
          >
            <Text style={{ color: "#fff" }}>SKORUNU KAYDET</Text>
          </TouchableOpacity>
          {records.map(
            (record, index) =>
              record.bestScore > 0 && (
                <Text style={styles.text2} key={index}>
                  Player {record.playerName}: {record.bestScore} defada bildi.
                </Text>
              )
          )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};


export default GuessScreen;
