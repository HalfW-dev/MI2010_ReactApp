import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form/Form'
import Calculation from './components/Form/logic/Calculation'

function App() {
  const [lowerBound, setLowerBound] = React.useState(1)
  const [upperBound, setUpperBound] = React.useState(2)
  const [func, setFunc] = React.useState('x^3+4x^2-10')
  const [times, setTimes] = React.useState(10)
  const [errorAllowance, setErrorAllowance] = React.useState(0.001)

  const [status, setStatus] = React.useState('idle')

  const [isModeTime, setIsModeTime] = React.useState(true)
  
  return (
    <>
      <Form
        lowerBound={lowerBound} setLowerBound={setLowerBound}
        upperBound={upperBound} setUpperBound={setUpperBound}
        func={func} setFunc={setFunc}
        times={times} setTimes={setTimes}
        errorAllowance={errorAllowance} setErrorAllowance={setErrorAllowance}
        status={status} setStatus={setStatus} 
        isModeTime={isModeTime} setIsModeTime={setIsModeTime}
      />
      
      <Calculation 
          lowerBound={lowerBound}
          upperBound={upperBound}
          func={func}
          times={times}
          errorAllowance={errorAllowance}
          status={status}
          setStatus={setStatus}
          isModeTime={isModeTime}
      />
    </>
  )
}

export default App
