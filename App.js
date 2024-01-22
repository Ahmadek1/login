import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';



import { Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/tabs'
import Login from './Login';
import Register from './Register';

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    
      return (
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'Login'}
              >
                
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="HomeTabs" component={Tabs} />
                  <Stack.Screen name="Restaurant" component={Restaurant} />
                  <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                  <Stack.Screen name="Register" component={Register} />
              </Stack.Navigator>
          </NavigationContainer>
      )
    
}

export default App;