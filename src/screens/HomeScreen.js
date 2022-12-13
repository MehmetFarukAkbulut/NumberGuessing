import React,{useState} from 'react';
import {View,Text,StyleSheet ,TextInput, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen= ()=> {
  const[correctNumber,setCorrectNumber] = useState(Math.floor(Math.random()*100)+1);
  const[guess,setGuess]=useState('');
  const[numGuesses, setNumGuesses]= useState(0);
  const[result,setResult]= useState('');
  const[guesses,setGuesses]= useState([]);
  const[bestScore, setBestScore]= useState(0);


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
      setResult('Daha Küçük '+correctNumber);
  }else{
      setResult('Daha Büyük '+correctNumber);
  }
  setNumGuesses(numGuesses+1);
  setGuesses([...guesses,guess]);
};
        return(
          <View style={{flex: 1,alignItems: 'center',justifyContent: 'flex-start', backgroundColor:'#D1D9D7'}}>
            <Text style={{color:'#1561ad', fontSize: 20, fontWeight: 'bold', marginTop:25}}>Sayı Tahmin Oyununa </Text>
            <Text style={{color:'#1561ad', fontSize: 20, fontWeight: 'bold'}}>Hoşgeldiniz! </Text>
            <Text style={{  fontSize: 15, fontWeight: '100', marginLeft:15, marginRight: 15 }}>
              En fazla 10 tahminde 1 ile 100 arasında bir sayıyı tahmin etmeye çalışın.  </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Best score: {bestScore}</Text>
            <Text style={{color:'#1561ad', fontSize: 20, fontWeight: 'bold' }}>Sayıyı Tahmin Edin</Text>
            <TextInput 
            style={{ fontSize: 20, fontWeight: 'bold' }}
            placeholder="Tahmininizi Girin: "
            onChangeText={onChangeText}
            value={guess}
            />
            <Button title= "Tahmin Et" color="#1561ad" onPress={onSubmit}/>
            <Text style={{color:'#1561ad', fontSize: 20, fontWeight: 'bold',marginLeft:15, marginRight: 15 }}>{result}</Text>
            
            <ScrollView>
            {guesses.map((guess, index)=>(
            <Text key={index}>Tahmin {index +1}: {guess}</Text>
              ))}
            </ScrollView>
            <Button title= "Baştan Başla" color="#728979" onPress={resetGame} />
            <Text> </Text><Text> </Text>
          </View>

        );
    };
    
export default HomeScreen;
