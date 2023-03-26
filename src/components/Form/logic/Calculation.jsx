import React from "react";
import style from "../Form.css"
import { bisectionTimes, bisectionErrorAllowance } from "./Bisection";
import { parseTex } from "tex-math-parser";



function Calculation({...delegated}) {
    const [data, setData] = React.useState([])
    const [count, setCount] = React.useState([])

    function handleCalculation(event) {
        
        delegated.setStatus('loading');
        console.log(delegated.status)

        if(delegated.isModeTime == true) {
            setData(bisectionTimes(delegated.lowerBound, delegated.upperBound, parseTex(String.raw`${delegated.func}`), delegated.times))
        } else {
            setData(bisectionErrorAllowance(delegated.lowerBound, delegated.upperBound, parseTex(String.raw`${delegated.func}`), delegated.errorAllowance))
        }

        delegated.setStatus('done');
        console.log(delegated.status)
    }
    
    return (
        <>
            {delegated.status == 'idle' && (<button onClick={handleCalculation}>Calculate!</button>)}
            {delegated.status == 'loading' && (<p>Calculating...</p>)}
            {delegated.status == 'done' &&
                    (
                        delegated.isModeTime == true ? 
                        (
                            <p>The solution is {data[0]} after {delegated.times} iterations</p>
                        )
                        :
                        (
                            <p>The solution is {data[0]} with error allowance {delegated.errorAllowance}, achieved after {data[1]} iterations</p>
                        )
                    ) 
            }
        </>
    )


}

export default Calculation;