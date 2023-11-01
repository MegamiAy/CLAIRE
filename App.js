import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import HomeSrc from './src/screens/HomeSrc';


const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator screenOptions={screenOptions}>
        <Menu.Screen name='Login' component={Login}/>
        <Menu.Screen name='Register' component={Register}/>
        <Menu.Screen name='Home' component={HomeSrc}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#000'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  drawerStyle: {
    backgroundColor: '#000',
    width: 240,
  },
  drawerActiveBackgroundColor: '#fff',
  drawerActiveTintColor: '#000',
  drawerInactiveTintColor: '#fff',
};


  