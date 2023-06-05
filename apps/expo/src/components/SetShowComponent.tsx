import { View, Text } from 'react-native'
import React from 'react'


type exercises={
  id: number;
name: string;
order: number;
setType: string;
sets: ObjectConstructor[][];
}

const SetShowComponent = (exercises:exercises) => {
  return (
    <View>
      <Text>SetShowComponent</Text>
    </View>
  )
}

export default SetShowComponent