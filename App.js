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
      headerStyle: { backgroundColor: "#fc1a64" },
      headerTitleStyle: { color: "white" },
    },
  }
);

export default createAppContainer(navigator);
