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

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator screenOptions={screenOptions}>
<<<<<<< HEAD
        <Menu.Screen name="Home" component={HomeSrc} />
        <Menu.Screen name="Recuperar" component={RecPass} />
=======
>>>>>>> 121e13b04442cec2225972b41cfd6a9f32b41bbc
        <Menu.Screen
          name="Início"
          component={Start}
          options={{
            headerShown: false,
          }}
        />
        <Menu.Screen name="Recuperar" component={RecPass} />
        <Menu.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Menu.Screen
          name="Registro"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
<<<<<<< HEAD

        <Menu.Screen name="Lista de produtos" component={Products} />
        <Menu.Screen name="Sair" component={LogOut} />
        <Menu.Screen name="Cadastrar Produtos" component={CadProd} />
=======
        <Menu.Screen 
        name="Home" 
        component={HomeSrc} 
        />
        <Menu.Screen 
        name="Lista de produtos" 
        component={Products} 
        />
        <Menu.Screen 
        name="Carrinho" 
        component={Cart} 
        />
        <Menu.Screen 
        name="Cadastrar Produtos" 
        component={CadProd} 
        />
        <Menu.Screen 
        name="Contato" 
        component={Contact} 
        />
        <Menu.Screen 
        name="Sair" 
        component={LogOut} 
        />
>>>>>>> 121e13b04442cec2225972b41cfd6a9f32b41bbc
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
