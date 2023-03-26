import React from 'react';
import style from './Form.css'
import Calculation from './logic/Calculation';

function Form({...delegated}) {
   
    const handleSwitch = (event) => {
        event.preventDefault();
        delegated.setIsModeTime(!delegated.isModeTime)
    }

    return (
        <>
            <h1>Bisection Method</h1>
            <form>
                <label>Lower bound</label>
                <input 
                    type="number"
                    id="lowerbound"
                    value={delegated.lowerBound}
                    onChange={(event) => {
                        setLowerBound(event.target.value)
                    }}
                />
                <label>Upper bound</label>
                <input 
                    type="number"
                    id="upperbound"
                    value={delegated.upperBound}
                    onChange={(event) => {
                        setUpperBound(event.target.value)
                    }}
                />
                <label>Function</label>
                <input 
                    type="text"
                    id="function"
                    value={delegated.func}
                    onChange={(event) => {
                        setFunc(event.target.value)
                    }}
                    />
                {
                    delegated.isModeTime == true ? (
                        <>
                            <label>How many times?</label>
                            <input 
                                type="number"
                                id="times"
                                value={delegated.times}
                                onChange={(event) => {
                                    delegated.setTimes(event.target.value)
                                }}
                            />
                        </>
                        
                    ) : (
                        <>
                            <label>Error allowance</label>
                            <input 
                                type="text"
                                id="errorallowance"
                                value={delegated.errorAllowance}
                                onChange={(event) => {
                                    setErrorAllowance(event.target.value)
                                }}
                            />
                        </>
                    )
                }
                <button onClick={handleSwitch}>Switch Mode</button>
            </form>
        </>
    )
}

export default Form