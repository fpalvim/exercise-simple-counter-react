import { useState, useEffect } from "react"

function Counter (){
const [time, setTime] = useState(0);
const [fisrtDigit, setFisrtDigit] = useState(0);
const [secondDigit, setSecondDigit] = useState(0);
const [thirdDigit, setThirdDigit] = useState(0);
const [fourthDigit, setFourthDigit] = useState(0);
const [fifthDigit, setFifthDigit] = useState(0);
const [sixthDigit, setSixthDigit] = useState(0);

useEffect(() =>{

    
    const interval = setInterval(() => {
        setTime(time+1);
        setFisrtDigit(parseInt(time / 100000) % 10);
        setSecondDigit(parseInt(time / 10000) % 10);
        setThirdDigit(parseInt(time / 1000) % 10);
        setFourthDigit(parseInt(time / 100) % 10);
        setFifthDigit(parseInt(time / 10) % 10);
        setSixthDigit(parseInt(time % 10));
    },1000)
    return () => {
        clearInterval(interval);
    };
}, [time]);

return <div className="container">
            <div className="counterDesign">{fisrtDigit}</div>
            <div className="counterDesign">{secondDigit}</div>
            <div className="counterDesign">{thirdDigit}</div>
            <div className="counterDesign">{fourthDigit}</div>
            <div className="counterDesign">{fifthDigit}</div>
            <div className="counterDesign">{sixthDigit}</div>
        </div>


}
export default Counter