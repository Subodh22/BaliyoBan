import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';
import SpecificScreen from '../screens/SpecificScreen';
type exercises={
  id: number;
name: string;
type: string;
setType: string;
order: number;
routineId: number;
sets: ObjectConstructor[][];
}
type jue={
  id:number,
  weekRoutine:string,
  exercises:exercises[],
  order:number

}

export type RootStackParamList={
    Main:undefined;
    MyModal:{workoutId:number; name:string,ratings:string};
    Specific:{data:jue[],name:string};

}
const RootStack = createNativeStackNavigator();


const RootNavigator = () => {
  return (
    <RootStack.Navigator>
       <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator}/>
       </RootStack.Group>

      
       <RootStack.Group 
       screenOptions={{
        presentation:"modal"
       }}>
        <RootStack.Screen options={{headerShown:false}} name="MyModal" component={ModalScreen}/>
       </RootStack.Group>
       
       <RootStack.Group>
        <RootStack.Screen name='Specific' component={SpecificScreen}/>
       </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator