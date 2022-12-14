import React, {useState, useEffect} from "react";
import { Text, StyleSheet,ScrollView, View,Linking, Button,TouchableOpacity } from "react-native";

const WhoAmIScreen = () => {
        const LONG_TEXT="Benim adım Mehmet Faruk Akbulut. Trakya Üniversitesinde, Bilgisayar Mühendisliği bölümü öğrencisiyim. Bu Sayı Tahmin Oyunu benim Mobil uygulama dersi final ödevim. Umarım keyif almışsınızdır.Uygulamanın kodlarını aşağıdaki Github hesabımdan bulabilirsiniz. Bana aşağıdaki hesaplarımdan ulaşabilirsiniz. Geri dönüşlerinizi veya sorularınızı bekliyorum..."
        const [text, setText] = React.useState("");  
        React.useEffect(() => {
             const timer = setInterval(() => {
            if (text.length >= LONG_TEXT.length) {
              clearInterval(timer);
              return;
            }
            setText(text + LONG_TEXT[text.length]);
          }, 125);
          return () => clearInterval(timer);
        }, [text]);
        




    
    const instagram=()=> {Linking.openURL('https://www.instagram.com/mfaruk_akbulut/')};
    const  linkedin=()=> { Linking.openURL('https://www.linkedin.com/in/mehmet-faruk-akbulut-692340236/')};
    const  github=()=> { Linking.openURL('https://github.com/MehmetFarukAkbulut')};
    const  mail=()=> { Linking.openURL('https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTZhHJCKJxMsWwtqVBBCSJbZzJxznMRJcWqsDlZmGJjcPzPlLpRdNdfStHJvPGRPmntg')};
    
    return (
<ScrollView>
        <View style={styles.container}>
            <Text style={styles.text6}>{text}</Text>
        <View style={styles.buttonView1}>
        <TouchableOpacity onPress={instagram} style={{ 
        backgroundColor: '#F77737',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15 }}
         ><Text style={{ color: '#fff' }}>INSTAGRAM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={linkedin} style={{ 
        backgroundColor: '#0072b1',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15 }}
         ><Text style={{ color: '#fff' }}>LINKEDIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={github} style={{ 
        backgroundColor: '#171515',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15 }}
         ><Text style={{ color: '#fff' }}>GITHUB</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={mail} style={{ 
        backgroundColor: '#4285F4',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15 }}
         ><Text style={{ color: '#fff' }}>MAIL</Text>
        </TouchableOpacity>
        </View>
        
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    buttonView1: { flex: 1, alignSelf: 'stretch', justifyContent: 'flex-end',marginLeft:10,marginRight:10},
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#D1D9D7'
    },
    text1:{color:'#1561ad', fontSize: 25, fontWeight: 'bold', marginTop:25,textAlign:'center'},
    text2:{  fontSize: 15, fontWeight: '100', marginLeft:15, marginRight: 15,textAlign:'center' },
    text3:{ fontSize: 20, fontWeight: 'bold',textAlign:'center' },
    text4:{ fontSize: 20, fontWeight: 'bold',textAlign:'center', marginTop:25 },
    text5:{ color:'#1561ad',fontSize: 20, fontWeight: 'bold',textAlign:'center', marginTop:5 },
    text6:{ color:'#000',fontSize: 20, fontWeight: '200',textAlign:'center',  marginTop:15,marginLeft:15 }
});


export default WhoAmIScreen;