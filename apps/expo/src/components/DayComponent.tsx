import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SetShowComponent from './SetShowComponent';
import ExerciseComponent from './ExerciseComponent';
import { useNavigation, useRoute } from '@react-navigation/native';

type exercises={
    id: number;
  name: string;
  type: string;
  setType: string;
  order: number;
  routineId: number;
  sets: ObjectConstructor[][];
}
type props={
    id:number,
    weekRoutine:string,
    exercises:exercises[],
    order:number

}

const DayComponent = ({id,weekRoutine,exercises,order}:props) => {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [expanded, setExpanded] = useState(false);
  
    const route = useRoute();
    const cRoute = route.name;
    console.log("HOMOMOOMO" +cRoute)
    const uniqueArray: exercises[] = exercises.filter((obj, index, self) =>
    index === self.findIndex((item) => item.name === obj.name)
  );
  
    
    const toggleAccordion = () => {
      setExpanded(!expanded);
      console.log(expanded)
    };
  return (
    <View>
    <View className='px-2 bg-neutral-400 m-2   flex justify-center item-center' >
         <TouchableOpacity onPress={toggleAccordion} className='flex-row justify-between h-10 items-center '> 
        <View className='flex-row  '> 
        <Text >{weekdays[order]} : </Text> 
        <Text>{weekRoutine}</Text>
        </View>
        <View >
           <Text>+</Text>
           </View>
          
           </TouchableOpacity>
       {expanded && cRoute === "MyModal"?<View>
          {uniqueArray.map(({id,name,sets,order,setType})=>(
            <ExerciseComponent key={id}  id={id}name={name} sets={sets} order={order} setType={setType} />
          ))}
        </View>
        :expanded && cRoute === "Specific"?<View>
          {exercises.map(({id,name,sets,order,setType})=>(
            <SetShowComponent key={id}  id={id}name={name} sets={sets} order={order} setType={setType} />
          ))}
        </View>:null

        }
           
    </View>
    </View>
  )
}

export default DayComponent