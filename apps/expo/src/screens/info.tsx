import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { HomeScreen } from './home';

const stack = createNativeStackNavigator();

export const  Info = () => {
  return (
     <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='home' component={HomeScreen}/>
        </stack.Navigator>

     </NavigationContainer>
  )
}

 