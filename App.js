import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from './src/screens/Login';
import HomeSrc from './src/screens/HomeSrc';
import Register from './src/screens/Register';
import RecPass from './src/screens/RecPass';
import CadProd from './src/screens/CadProd';

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Login' component={Login}/>
        <Menu.Screen name='Home' component={HomeSrc}/>
        <Menu.Screen name='Register' component={Register}/>
        <Menu.Screen name='RecPass' component={RecPass}/>
        <Menu.Screen name='CadProd' component={CadProd}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}

  