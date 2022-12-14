import React,{useState} from 'react';
import {View,Text,StyleSheet ,TextInput, Button,TouchableOpacity,Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const GuessScreen= ()=> {
  const[correctNumber,setCorrectNumber] = useState(Math.floor(Math.random()*100)+1);
  const[guess,setGuess]=useState('');
  const[numGuesses, setNumGuesses]= useState(0);
  const[result,setResult]= useState('');
  const[guesses,setGuesses]= useState([]);
  const[bestScore, setBestScore]= useState(0);
  const [playerName, setPlayerName] = useState('');
  const [records, setRecords] = useState([]);

 
  const onChangePlayerName = (text) => setPlayerName(text);

  const submitRecord = () => {
    setRecords([...records, { playerName, bestScore }]);
  }


  const resetGame = () => {
    setCorrectNumber(Math.floor(Math.random()*100)+1);
    setGuess('');
    setNumGuesses(0);
    setResult('');
    setGuesses([]);
    setBestScore(0);

  }
  

  const onChangeText= (text) => setGuess(text);

  const onSubmit= () => {
    if (numGuesses >= 10){
      setResult('Oyun Bitti! Doğru sayı:  '+ correctNumber);
      return;
  }

  if(guess==correctNumber){
    if (numGuesses + 1 < bestScore || bestScore === 0) {
      setBestScore(numGuesses + 1);
    }
      setResult('Tebrikler,doğru tahmin ettiniz!'+(numGuesses+1) +'. defada sayıyı bildiniz!'  );
      
      return;
  }

  if(guess>correctNumber){
      setResult('Daha Küçük ');
  }else{
      setResult('Daha Büyük ');
  }
  setNumGuesses(numGuesses+1);
  setGuesses([...guesses,guess]);
};
const luckyPress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}

const deadPress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=j9V78UbdzWI&t=6s');
}

        return(
          <View style={styles.container}>
            <ScrollView>
            <Text style={styles.text1}>Sayı Tahmin Oyununa Hoşgeldiniz!</Text>
            <Text style={styles.text2}>
              En fazla 10 tahminde 1 ile 100 arasında bir sayıyı tahmin etmeye çalışın.  </Text>
            <Text style={styles.text3} >Best score: {bestScore}</Text>
            <Text style={styles.text5}>Sayıyı Tahmin Edin</Text>
            <TextInput 
            style={styles.input}
            placeholder="Tahmininizi Girin: "
            onChangeText={onChangeText}
            value={guess}
            />
            <TouchableOpacity onPress={onSubmit} style={{ 
            backgroundColor: '#6a5acd',
            alignItems: 'center',
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15 }}
             ><Text style={{ color: '#fff' }}>TAHMİN ET</Text>
            </TouchableOpacity>
            <Text style={{color:'#1561ad', fontSize: 20, fontWeight: 'bold',marginLeft:15, marginRight: 15,textAlign:'center' }}>{result}</Text>

            {bestScore === 1 && <Button title= "Tek Tahmin Ödülü" color="#ffc0cb" onPress={luckyPress} />}
            {numGuesses >= 10 && <Button title= "Geçmiş Olsun" color="#000" onPress={deadPress} />}
            <ScrollView >
            {guesses.map((guess, index)=>(
            <Text style={styles.text2} key={index}>Tahmin {index +1}: {guess}</Text>
              ))}
            </ScrollView>
            <TouchableOpacity onPress={resetGame} style={{ 
            backgroundColor: '#4169e1',
            alignItems: 'center',
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15 }}
             ><Text style={{ color: '#fff' }}>BAŞTAN BAŞLA</Text>
            </TouchableOpacity>
            <TextInput
            style={styles.input}
            placeholder="Player Name"
            value={playerName}
            onChangeText={onChangePlayerName}
            />
            <TouchableOpacity onPress={submitRecord} style={{ 
            backgroundColor: '#087EB0',
            alignItems: 'center',
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15 }}
             ><Text style={{ color: '#fff' }}>SKORUNU KAYDET</Text>
            </TouchableOpacity>

            {records.map((record, index) => (record.bestScore>0 &&
            <Text style={styles.text2} key={index}>Player {record.playerName}: {record.bestScore} defada bildi</Text>
            ))}
            </ScrollView>
         </View>
          

        );
    };
    const styles = StyleSheet.create({
        input: {
            width: 300,
            height: 40,
            textAlign:'center',
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 15, 
            fontSize: 16,
    },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor:'#fff0f5'
        },
        text1:{color:'#07064a', fontSize: 25, fontWeight: 'bold', marginTop:25,textAlign:'center'},
        text2:{  fontSize: 15, fontWeight: '100', marginLeft:15, marginRight: 15,textAlign:'center' },
        text3:{ fontSize: 20, fontWeight: 'bold',textAlign:'center' },
        text4:{ fontSize: 20, fontWeight: 'bold',textAlign:'center', marginTop:25 },
        text5:{ color:'#07064a',fontSize: 20, fontWeight: 'bold',textAlign:'center', marginTop:5 }
    });

export default GuessScreen;
