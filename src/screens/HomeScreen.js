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
      <Text style={styles.text3}>Merhaba {playerName}!</Text>
        <View style={styles.buttonView1}>
    <Button 
        onPress={() => navigation.navigate('Guess')}
        title="Sayı Tahmin Oyunu"
        color='#828972'
        
    />
    <Button 
        onPress={() => navigation.navigate('HowTo')}
        title="Nasıl Oynanır"
        color='#728979'
        
    />
    <Button 
        onPress={() => navigation.navigate('WhoAmI')}
        title="Hakkımda"
        color='#897282'
        
    />
  </View>
    </View>
    );

};
const styles = StyleSheet.create({
  
  buttonView1: { flex: 1, alignSelf: 'stretch', marginLeft:10,marginRight:10},
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor:'#D1D9D7'
  },
  text1:{color:'#1561ad', fontSize: 25, fontWeight: 'bold', marginTop:25,textAlign:'center'},
  text2:{  fontSize: 15, fontWeight: '100', marginLeft:15, marginRight: 15,textAlign:'center' },
  text3:{ fontSize: 20, fontWeight: 'bold',textAlign:'center' }
});

export default HomeScreen;