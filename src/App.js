import React , {useReducer ,useState}from "react";
import ButtonDigit from "./ButtonDigit";
import ButtonOperation from "./ButtonOperation";
import "./style.css"

export const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  DELETE_DIGIT: 'delete-digit',
  CLEAR : 'clear',
  CHOOSE_OPERATION : 'choose-operation',
  EVALUATION : 'evaluation'
}

function reducer (state, action) { 
   switch(action.type){
    case ACTIONS.ADD_DIGIT: 
      return {...state, currentOperand: `${state.currentOperand || ""}${action.payload}`}  
    case ACTIONS.DELETE_DIGIT:
      return state
    case ACTIONS.CLEAR:
      return {currentOperand: 0}
    case ACTIONS.CHOOSE_OPERATION:
      return state
    case ACTIONS.EVALUATION:
      return state
    default:
      return state
   }
}
export default function App() {
  const [{prevOperand=null, currentOperand =0, operation=null}, dispatch] = useReducer(reducer,{})
  // console.log("Rendered!")
  // dispatch({payload:})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="prev-operand">{prevOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
        <button className="span-two">AC</button>
        <button>DEL</button>
        <ButtonOperation operation={'/'} dispatch={dispatch}/>
        <ButtonDigit number="1" dispatch={dispatch}/>
        <ButtonDigit number="2" dispatch={dispatch}/>
        <ButtonDigit number="3" dispatch={dispatch}/>
        <ButtonOperation operation={'*'} dispatch={dispatch}/>
        <ButtonDigit number="4" dispatch={dispatch}/>
        <ButtonDigit number="5" dispatch={dispatch}/>
        <ButtonDigit number="6" dispatch={dispatch}/>
        <ButtonOperation operation={'+'} dispatch={dispatch}/>
        <ButtonDigit number="7" dispatch={dispatch}/>
        <ButtonDigit number="8" dispatch={dispatch}/>
        <ButtonDigit number="9" dispatch={dispatch}/>
        <ButtonOperation operation={'-'} dispatch={dispatch}/>
        <ButtonOperation operation={'.'} dispatch={dispatch}/>
        <ButtonDigit number="0" dispatch={dispatch}/>
        <button className="span-two">=</button>
        {/* <ButtonOperation className="span-two" operation={'='} dispatch={dispatch}/>      */}
    </div>
  );
}

//ButtonDigit and ButtonOperation used to display digits and operations
//respectively in interface