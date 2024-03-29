import React from 'react'
import { ACTIONS } from './Actions'

export default function ButtonOperation({operation, dispatch}) {
  return (
    <button onClick={
        () => dispatch( {
            type:ACTIONS.CHOOSE_OPERATION , 
            payload:operation})}>{operation}</button>
  )
}
