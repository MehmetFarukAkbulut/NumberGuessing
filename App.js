// Bu kod React Native kütüphanesini kullanarak mobil bir uygulama 
// için yığın tabanlı bir navigasyon sistemi oluşturur. createStackNavigator 
// fonksiyonu, "Home", "Guess", "HowTo" ve "WhoAmI" adlı dört farklı ekrandan 
// oluşan bir yığın navigatörü oluşturmak için kullanılır. "Home" ekranı 
// başlangıç rotası olarak ayarlanır ve üstbilgi seçenekleri belirli stillerle 
// özelleştirilir. Son olarak, createAppContainer fonksiyonu, yığın 
// navigatörünü sarmak ve uygulamanın kök navigatörü yapmak için kullanılır.

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GuessScreen from "./src/screens/GuessScreen";
import HomeScreen from "./src/screens/HomeScreen";
import HowToScreen from "./src/screens/HowToScreen";
import WhoAmIScreen from "./src/screens/WhoAmIScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Guess: GuessScreen,
    HowTo: HowToScreen,
    WhoAmI: WhoAmIScreen,
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Sayı Tahmin Oyunu",
      headerStyle: { backgroundColor: "#58508d" },
      headerTitleStyle: { color: "#ffa600",alignSelf:"center" },
    },
  }
);

export default createAppContainer(navigator);
