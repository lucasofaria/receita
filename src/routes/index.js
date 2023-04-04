import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/home';
import { Favorite } from '../pages/favorites';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle:{
          backgroundColor: "#FFF",
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={Home}
        options={{
          tabBarIcon: ({  color, size, focussed }) => {
            
          }
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={Favorite}
      />
    </Tab.Navigator>
  )
}