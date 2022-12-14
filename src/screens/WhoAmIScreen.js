import React, {useState, useEffect} from "react";
import { Text, StyleSheet,ScrollView, View,Linking, Button,TouchableOpacity } from "react-native";

const WhoAmIScreen = () => {
        const LONG_TEXT="Benim adım Mehmet Faruk Akbulut. Trakya Üniversitesinde, Bilgisayar Mühendisliği bölümü öğrencisiyim. Bu Sayı Tahmin Oyunu benim Mobil uygulama dersi final ödevim. Umarım keyif almışsınızdır.Uygulamanın kodlarını aşağıdaki Github hesabımdan bulabilirsiniz. Bana aşağıdaki hesaplarımdan ulaşabilirsiniz. Geri dönüşlerinizi bekliyorum..."
        const [text, setText] = React.useState("");  
        React.useEffect(() => {
             const timer = setInterval(() => {
            if (text.length >= LONG_TEXT.length) {
              clearInterval(timer);
              return;
            }
            setText(text + LONG_TEXT[text.length]);
          }, 10);
          return () => clearInterval(timer);
        }, [text]);
        




    
    const instagram=()=> {Linking.openURL('https://www.instagram.com/mfaruk_akbulut/')};
    const  linkedin=()=> { Linking.openURL('https://www.linkedin.com/in/mehmet-faruk-akbulut-692340236/')};
    const  github=()=> { Linking.openURL('https://github.com/MehmetFarukAkbulut')};
    return (
        
        <View style={styles.container}>
        <ScrollView>
        <Text style={styles.text6}>{text}</Text>
        </ScrollView>
        <TouchableOpacity onPress={instagram} style={{ 
        backgroundColor: '#F77737',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15 }}
         ><Text style={{ textAlign:'center',color: '#fff' }}>INSTAGRAM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={linkedin} style={{ 
        backgroundColor: '#0072b1',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15 }}
         ><Text style={{ textAlign:'center',color: '#fff' }}>LINKEDIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={github} style={{ 
        backgroundColor: '#171515',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15 }}
         ><Text style={{ textAlign:'center',color: '#fff' }}>GITHUB</Text>
        </TouchableOpacity>
        </View>

       
    );
};

const styles = StyleSheet.create({

    buttonView1: { flex: 1, alignSelf: 'stretch', justifyContent: 'flex-end',marginLeft:10,marginRight:10},
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff0f5'
    },
    text1:{color:'#1561ad', fontSize: 25, fontWeight: 'bold', marginTop:25,textAlign:'center'},
    text2:{  fontSize: 15, fontWeight: '100', marginLeft:15, marginRight: 15,textAlign:'center' },
    text3:{ fontSize: 20, fontWeight: 'bold',textAlign:'center' },
    text4:{ fontSize: 20, fontWeight: 'bold',textAlign:'center', marginTop:25 },
    text5:{ color:'#1561ad',fontSize: 20, fontWeight: 'bold',textAlign:'center', marginTop:5 },
    text6:{ color:'#000',fontSize: 20, fontWeight: '200',textAlign:'center',  marginTop:15,marginLeft:15 }
});


export default WhoAmIScreen;