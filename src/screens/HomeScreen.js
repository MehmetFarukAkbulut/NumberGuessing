import React,{useState} from "react";
import { Text, StyleSheet, View, Button,TextInput, TouchableOpacity } from "react-native";


 
const HomeScreen = ({navigation}) => {
  const [playerName, setPlayerName] = useState('');

    return (
    <View  style={styles.container}> 
    <Text style = { styles.text1 }> Mobil Uygulamama Hoşgeldiniz! </Text>
    <TextInput
        style={styles.text3}
        placeholder="Lütfen adınızı giriniz"
        value={playerName}
        onChangeText={(text) => setPlayerName(text)}
      />
      <Text 
        style={styles.text1}>Merhaba {playerName}!</Text>
    <Button 
        onPress={() => navigation.navigate('Guess')}
        title="Sayı Tahmin Oyunu"
        color='#828972'
        
    />
    <Button 
        onPress={() => navigation.navigate('HowTo')}
        title="Talimatlar"
        color='#728979'
        
    />
    <Button 
        onPress={() => navigation.navigate('Settings')}
        title="Ayarlar"
        color='#897282'
        
    />
  
    </View>
    );

global.playerName = this.state.playerName;
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor:'#D1D9D7'
  },
  text1:{color:'#1561ad', fontSize: 20, fontWeight: 'bold', marginTop:25,textAlign:'center'},
  text2:{  fontSize: 15, fontWeight: '100', marginLeft:15, marginRight: 15,textAlign:'center' },
  text3:{ fontSize: 20, fontWeight: 'bold',textAlign:'center' }
});

export default HomeScreen;