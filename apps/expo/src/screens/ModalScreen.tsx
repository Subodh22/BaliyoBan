import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Card } from '@rneui/base'
import SetShowComponent from '../components/SetShowComponent'
import DayComponent from '../components/DayComponent'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabParamList } from '../Navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigator/RootNavigator'
import { Icon } from 'react-native-elements'

type ModalScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabParamList>,
    NativeStackNavigationProp<RootStackParamList,"MyModal">>;

type ModalScreenRouteProp = RouteProp<RootStackParamList,"MyModal">
const ModalScreen = () => {
    const [data,setData]=useState([
        {
            id: 93,
            workoutCelebId: 25,
            weekRoutine: 'Back',
            order: 0,
            exercises: [
                {
                    id: 1401,
                    name: 'Deadlifts',
                    type: 'reps',
                    setType: 'supersets',
                    order: 0,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1411,
                    name: 'Deadlifts',
                    type: 'reps',
                    setType: 'supersets',
                    order: 0,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1402,
                    name: 'Bent-Over Rows',
                    type: 'reps',
                    setType: '',
                    order: 1,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1403,
                    name: 'Wide Grip Latoulldowns',
                    type: 'reps',
                    setType: '',
                    order: 2,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1404,
                    name: 'Straight Arm Pulldowns',
                    type: 'reps',
                    setType: '',
                    order: 3,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1405,
                    name: 'Dumbbell Rows',
                    type: 'reps',
                    setType: '',
                    order: 4,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1406,
                    name: 'Machine Rows',
                    type: 'reps',
                    setType: '',
                    order: 5,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1407,
                    name: 'Hyper Extensions',
                    type: 'reps',
                    setType: '',
                    order: 6,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1408,
                    name: 'plank',
                    type: 'time',
                    setType: '',
                    order: 7,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1409,
                    name: 'bench press',
                    type: 'reps',
                    setType: '',
                    order: 8,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1410,
                    name: 'dumbell curls',
                    type: 'reps',
                    setType: '',
                    order: 9,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1411,
                    name: 'cat pose',
                    type: 'time',
                    setType: '',
                    order: 10,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1412,
                    name: 'bench up right press',
                    type: 'reps',
                    setType: '',
                    order: 11,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  }
            ]
          },
          {
            id: 94,
            workoutCelebId: 25,
            weekRoutine: 'Chest and Biceps',
            order: 1,
            exercises: [   
                {
                    id: 1411,
                    name: 'Deadlifts',
                    type: 'reps',
                    setType: '',
                    order: 0,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },
                  {
                    id: 1412,
                    name: 'Bent-Over Rows',
                    type: 'reps',
                    setType: '',
                    order: 1,
                    routineId: 93,
                    sets: [ [Object], [Object], [Object], [Object] ]
                  },]
          },
          {
            id: 95,
            workoutCelebId: 25,
            weekRoutine: 'Hamstrings and Glutes',
            order: 2,
            exercises: []
          },
          {
            id: 96,
            workoutCelebId: 25,
            weekRoutine: 'Shoulder and Triceps',
            order: 3,
            exercises: []
          },
          {
            id: 97,
            workoutCelebId: 25,
            weekRoutine: 'Quads',
            order: 4,
            exercises: []
          },
          {
            id: 98,
            workoutCelebId: 25,
            weekRoutine: 'Rest',
            order: 5,
            exercises: []
          },
          {
            id: 99,
            workoutCelebId: 25,
            weekRoutine: 'Rest 2',
            order: 6,
            exercises: []
          }
      ])
      const navigation = useNavigation<ModalScreenNavigationProp>()
      const sortedData = data.sort((a,b)=>a.order-b.order)
      const {params:{name,workoutId,ratings}} =useRoute<ModalScreenRouteProp>()
      console.log(sortedData)
  return (
    <View>
        {/* <TouchableOpacity onPress={navigation.goBack} className='absolute right-5 top-5 z-10'>
            <Icon name='closecircle' type='antdesign'/>
        </TouchableOpacity> */}
    <View className='px-5 py-4 ' > 
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
      </View>
      <Card.Divider/>
        <View>

             {sortedData.map(({weekRoutine,id,exercises,order})=>(
               <DayComponent key={id} id={id} weekRoutine={weekRoutine} exercises={exercises} order={order} />
             ))}
        </View>
    </View>
  )
}

export default ModalScreen