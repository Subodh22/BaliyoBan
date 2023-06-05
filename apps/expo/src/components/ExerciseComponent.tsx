import { View, Text } from 'react-native'
import React, { useState } from 'react'

type exercises={
    id: number;
  name: string;
  order: number;
  setType: string;
  sets: ObjectConstructor[][];
}

const ExerciseComponent = ({id,name,sets,setType}:exercises) => {
  let color;

  return (
    <View>
        <View className='flex-row justify-between bg-gray-300 m-0.5'> 
        
        <Text>{name}</Text> 
        {setType==="supersets"&& 
        <View  className='bg-red-200'>
           <Text>{setType}</Text>
           </View>}
        </View>
      
    </View>
  )
}

export default ExerciseComponent