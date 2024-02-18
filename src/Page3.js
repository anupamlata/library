import { useEffect, useState } from "react";

function Page3() {
    const [number,setNunmber] = useState(0);
    const [number1,setNunmber1] = useState(0);
    const [number2,setNunmber2] = useState(0);
    const [number3,setNunmber3] = useState(0);
    const onIput =(value) =>{
        setNunmber(parseInt(value));
    }

    // useEffect(() =>{
    //     setTimeout(() =>{
    //         setNunmber(5);
    //         setNunmber1(5);
    //         setNunmber2(6);
    //     },2000)
    // },[])
    useEffect(() =>{
        setInterval(() =>{
            console.log("5")
            setNunmber1(number1+2);
            
        },1000)
    },[number1])
    
    const onOutput =(value) => {
        setNunmber1(parseInt(value));
    }
    const onGet =(value) =>{
        setNunmber2(parseInt(value));
    }

    const addEvent = () =>{
        const sum=number+number1+number2;
        setNunmber3(sum);
    } 

     return(
        <div>
        <input type="number"  onChange={(e)=>onIput(e.target.value)} value={number}></input>
        <input type="number" onChange={(e)=>onOutput(e.target.value)} value={number1}></input>
        <input type="number" onChange={(e)=>onGet(e.target.value)} value={number2}></input>
        <div>
            <button onClick={()=> addEvent()}>Add number</button>
        </div>
        <p> {number3}</p>
        </div>

     )
}
export default Page3;

// https://jsonplaceholder.typicode.com/