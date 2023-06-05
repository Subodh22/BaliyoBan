import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../Navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigator/RootNavigator';
import DayComponent from '../components/DayComponent';

type SpecificScreenRouteProp = RouteProp<RootStackParamList,"Specific">;
export type MyExerciseNavigationProp=CompositeNavigationProp<BottomTabNavigationProp<TabParamList,"MyExercise">,
NativeStackNavigationProp<RootStackParamList>>;


const SpecificScreen = () => {
  const navigation = useNavigation<MyExerciseNavigationProp>()
  // const route = useRoute<SpecificScreenRouteProp>
  const {params:{data:data,name:name}}=useRoute<SpecificScreenRouteProp>();
  console.log(data);
  console.log(name)
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle:name
    })

  },[data])
  return (
    <View>
    
             {data.map(({weekRoutine,id,exercises,order})=>(
               <DayComponent key={id} id={id} weekRoutine={weekRoutine} exercises={exercises} order={order} />
             ))}
      
    </View>
  )
}

export default SpecificScreen