import {useContext } from 'react';
import { WorkoutsContext } from '../context/WorkoutContext';





export const useWorkoutsContext = () =>{
 const context = useContext(WorkoutsContext)

 if(!context){
    throw Error('useworkoutscontext must be used inside an workoutsContextProvider')
 }
return context
}