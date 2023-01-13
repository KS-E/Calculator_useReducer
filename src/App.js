import React , {useReducer}from "react";
import ButtonDigit from "./ButtonDigit";
import ButtonOperation from "./ButtonOperation";
import "./style.css"
import { ACTIONS } from "./Actions";


function reducer (state, action) { 
  console.log(state)
  console.log(action) 
  switch(action.type){
    case ACTIONS.ADD_DIGIT: //add digit
         return {...state, currentOperand: `${state.currentOperand || ""}${action.payload}`}           
    case ACTIONS.DELETE_DIGIT: //single digit
      return {...state, currentOperand: state.currentOperand.substring(0,state.currentOperand.length-1)}
    case ACTIONS.CLEAR:  //clear output
      return { prevOperand: null, currentOperand: 0 ,operation: null}
    case ACTIONS.CHOOSE_OPERATION: 
     if(action.payload && state.currentOperand == null) { // operation and evaluation shouldn't be the first button pressed 
        return state 
       }       
      else if(action.payload ==='.' && state.currentOperand.includes('.')){ //extra decimals
        return state
      } else{ //displaying the operations
      return {...state, currentOperand: `${state.currentOperand}${action.payload}`}
     }      
    case ACTIONS.EVALUATION: //calling evaluation function (when = is pressed)
        const numbers = state.currentOperand.split(/([-+*/])/g) // the number is evaluated
        const result = evaluateNum(numbers[0], numbers[1],numbers[2])
        return {currentOperand : result}
    default:
      return state
   }
}

// evaluation function
function evaluateNum( prevOperand, operation, currentOperand){
   let prevNum = parseFloat(prevOperand)
   let currentNum = parseFloat(currentOperand)
   console.log(prevNum)
   console.log(currentNum)
   if (operation === '+'){     
       return prevNum + currentNum
   } else if(operation === '-') {
      return  prevNum - currentNum 
   } else if(operation === '*') {
      return  prevNum * currentNum
   } else if(operation === '/' && currentOperand!= '0') {
      return prevNum / currentNum
   } 
}

export default function App() {
  const [{prevOperand=null, currentOperand =0, operation=null}, dispatch] = useReducer(reducer,{})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="prev-operand">{prevOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
        <button className="span-two" onClick={()=> {
          dispatch({type: ACTIONS.CLEAR , payload:null})
        }}>AC</button>
        <button onClick={()=> {
          dispatch({type: ACTIONS.DELETE_DIGIT , payload:null})
        }}>DEL</button>
        <ButtonOperation operation='/' dispatch={dispatch}/>
        <ButtonDigit number="1" dispatch={dispatch}/>
        <ButtonDigit number="2" dispatch={dispatch}/>
        <ButtonDigit number="3" dispatch={dispatch}/>
        <ButtonOperation operation='*' dispatch={dispatch}/>
        <ButtonDigit number="4" dispatch={dispatch}/>
        <ButtonDigit number="5" dispatch={dispatch}/>
        <ButtonDigit number="6" dispatch={dispatch}/>
        <ButtonOperation operation='+' dispatch={dispatch}/>
        <ButtonDigit number="7" dispatch={dispatch}/>
        <ButtonDigit number="8" dispatch={dispatch}/>
        <ButtonDigit number="9" dispatch={dispatch}/>
        <ButtonOperation operation='-' dispatch={dispatch}/>
        <ButtonOperation operation='.' dispatch={dispatch}/>
        <ButtonDigit number="0" dispatch={dispatch}/>  
        <button className="span-two" onClick={()=> {
          dispatch({type: ACTIONS.EVALUATION , payload:'='})
        }}>=</button>
    </div>
  );
}

//ButtonDigit and ButtonOperation used to display digits and operations
//respectively in interface

//ERROR TO BE RECTIFIED:
//1//prevent consecutive operators
//2// error after operation buttons are pressed after result is assigned to currentOperand 


//CHECK CODE: 
//if(state.currentOperand.includes('/') || state.currentOperand.includes('*') ||
      //  state.currentOperand.includes('+')|| state.currentOperand.includes('-')) { 
        //when second operator is pressed operator is in the last entry
        //when the second operation is pressed, first operator should get replaced by second!!
          // let string = state.currentOperand
          // let variable = '/^[*+-/]*$/'
          // console.log(string)
          // if(string.charAt([string.length - 1]).match(variable)) {
            // console.log("operator present")
            //  return state
          // }
          //     const numbers = state.currentOperand.split(/([-+*/])/g) // the number is evaluated
          //     const result = evaluateNum(numbers[0], numbers[1],numbers[2])
          //     return {currentOperand : result}