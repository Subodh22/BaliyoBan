import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { HeadScreenNavigationProp } from '../screens/HeadScreen';
import {Button} from 'react-native-elements';
import { Card } from '@rneui/base';
 type props ={
    workoutId : number;
    name : string;
    ratings:string;
 }
const Workout_celeb = ({workoutId,name,ratings}:props) => {

     const navigation = useNavigation<HeadScreenNavigationProp>();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("MyModal",{name:name,workoutId:workoutId,ratings:ratings})} >
        <Card  > 
            <View className='flex-row justify-between'> 
             <View className='flex items-center justify-center'>
                <Text >{name}
                
                </Text></View> 
             <View className='flex-column items-center'> 
                <TouchableOpacity className='items-center justify-center w-20 h-10   rounded-lg bg-blue-500 el'>
                    <Text>Add</Text>
                </TouchableOpacity>
                <View className='bg-gray-300 w-10 flex items-center m-2 '> 
                <Text>{ratings}</Text></View>
                </View>
            </View> 
      </Card>
    
    </TouchableOpacity>
  )
}

export default Workout_celeb