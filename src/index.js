import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeSrc from "./screens/HomeSrc";
import Register from "./screens/Register";
import Login from "./screens/Login";
import CadProd from "./screens/CadProd";
import RecPass from "./screens/RecPass";
import User from "./screens/User";
import Cart from "./screens/Cart";
import Start from "./screens/Start";
import Contact from "./screens/Contact";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Start" component={Start} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="Registro" component={Register} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={HomeSrc} options={{headerShown:false}}/>
                <Stack.Screen name="Adicionar Produto" component={CadProd} options={{headerShown:false}}/>
                <Stack.Screen name="Recuperar" component={RecPass} options={{headerShown:false}}/>
                <Stack.Screen name="Usuário" component={User} options={{headerShown:false}}/>
                <Stack.Screen name="Carrinho" component={Cart} options={{headerShown:false}}/>
                <Stack.Screen name="Contato" component={Contact} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}