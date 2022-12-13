import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Sayı Tahmin Oyunu",
      headerStyle:{backgroundColor:'#728979'},
      headerTitleStyle: { color: "white" },
    },
  }
);

export default createAppContainer(navigator);
