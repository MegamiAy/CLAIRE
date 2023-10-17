import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeSrc from "./screens/HomeSrc";
import Register from "./screens/Register";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registro" component={Register} />
                <Stack.Screen name="Home" component={HomeSrc} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}