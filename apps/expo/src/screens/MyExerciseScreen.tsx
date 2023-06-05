import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Card } from '@rneui/base'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabParamList } from '../Navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigator/RootNavigator'

export type MyExerciseNavigationProp=CompositeNavigationProp<BottomTabNavigationProp<TabParamList,"MyExercise">,
NativeStackNavigationProp<RootStackParamList>>;

const MyExerciseScreen = () => {
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
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              
              {
                id: 1402,
                name: 'Deadlifts',
                type: 'reps',
                setType: '',
                order: 1,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1403,
                name: 'Wide Grip Latoulldowns',
                type: 'reps',
                setType: '',
                order: 2,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1404,
                name: 'Straight Arm Pulldowns',
                type: 'reps',
                setType: '',
                order: 3,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1405,
                name: 'Dumbbell Rows',
                type: 'reps',
                setType: '',
                order: 4,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1406,
                name: 'Machine Rows',
                type: 'reps',
                setType: '',
                order: 5,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1407,
                name: 'Hyper Extensions',
                type: 'reps',
                setType: '',
                order: 6,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1408,
                name: 'plank',
                type: 'time',
                setType: '',
                order: 7,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1409,
                name: 'bench press',
                type: 'reps',
                setType: '',
                order: 8,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1410,
                name: 'dumbell curls',
                type: 'reps',
                setType: '',
                order: 9,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1411,
                name: 'cat pose',
                type: 'time',
                setType: '',
                order: 10,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1412,
                name: 'bench up right press',
                type: 'reps',
                setType: '',
                order: 11,
                routineId: 93,
                sets: [ [], [], [], [] ]
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
                sets: [ [ ], [ ], [ ], [ ] ]
              },
              {
                id: 1412,
                name: 'Bent-Over Rows',
                type: 'reps',
                setType: '',
                order: 1,
                routineId: 93,
                sets: [ [ ], [ ], [ ], [ ] ]
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
  const navigation =useNavigation<MyExerciseNavigationProp>()
  return (
    <View>
        {/* <TouchableOpacity onPress={navigation.goBack} className='absolute right-5 top-5 z-10'>
            <Icon name='closecircle' type='antdesign'/>
        </TouchableOpacity> */}
    <TouchableOpacity onPress={()=>navigation.navigate("Specific",{data:data,name:"Chris Bumstead"}) } className='px-5 py-4 ' > 
            <View className='flex-row justify-between'> 
             <View className='flex items-center justify-center'>
                <Text >Chris Bumstead
                
                </Text></View> 
             
            </View> 
      </TouchableOpacity>
      <Card.Divider/>
       
    </View>
  )
}

export default MyExerciseScreen