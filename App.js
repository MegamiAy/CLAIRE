import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import "react-native-gesture-handler";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import HomeSrc from "./src/screens/HomeSrc";
import LogOut from "./src/screens/LogOut";
import CadProd from "./src/screens/CadProd";
import RecPass from "./src/screens/RecPass";
import Start from "./src/screens/Start";
import Products from "./src/screens/Products";
import Contact from "./src/screens/Contact";
import Cart from "./src/screens/Cart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProdDetails from "./src/screens/ProdDetails";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator screenOptions={screenOptions}>
        <Menu.Screen
          name="Início"
          component={Start}
          options={{
            headerShown: false,
            drawerItemStyle: { height: 0 },
          }}
        />
        <Menu.Screen
          name="Produtos"
          component={Products}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Menu.Screen
          name="Recuperar"
          component={RecPass}
          options={{
            headerShown: false,
            drawerItemStyle: { height: 0 },
          }}
        />
        <Menu.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            drawerItemStyle: { height: 0 },
          }}
        />
        <Menu.Screen
          name="Registro"
          component={Register}
          options={{
            headerShown: false,
            drawerItemStyle: { height: 0 },
          }}
        />
        <Menu.Screen name="Home" component={HomeSrc} />
        <Menu.Screen
          name="ALL"
          component={Products}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Menu.Screen name="Carrinho" component={Cart} />
        <Menu.Screen name="Cadastrar Produtos" component={CadProd} />
        <Menu.Screen name="Contato" component={Contact} />
        <Menu.Screen name="Sair" component={LogOut} />
        <Menu.Screen name="ProdDetails" component={ProdDetails} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#000",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  drawerStyle: {
    backgroundColor: "#000",
    width: 240,
  },
  drawerActiveBackgroundColor: "#fff",
  drawerActiveTintColor: "#000",
  drawerInactiveTintColor: "#fff",
};
