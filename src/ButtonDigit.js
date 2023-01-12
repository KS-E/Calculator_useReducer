import React from 'react'
import { ACTIONS } from './Actions'

export default function ButtonDigit({number,dispatch}) {
  return (
    <>
      <button onClick={() => dispatch({type:ACTIONS.ADD_DIGIT , payload:number})}
       >{number}</button>
    </>
  
  )
}
