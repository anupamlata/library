import { useState  } from "react";

function Postapi() {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

    const inputTitle =(value) =>{
        setTitle(value);
    }
    const inputBody =(value) =>{
        setBody(value);
    }
    const createApi =()=>{
        const data = {
            title:title,
            body:body,
        }
console.log("data",data)
        const url="https://jsonplaceholder.typicode.com/posts"
        fetch(url,{
            method:"post",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
              },
            body:JSON.stringify(data)
        })
        .then(response =>{
          console.log("response",response)
        })
        .catch(e => {
          console.log("e",e)
        })
    }
    return(
<div>
            <input type="text" placeholder="inputTitle" onChange={(e)=>{inputTitle(e.target.value)}} value={title}></input>
            <br/>
            <input type="text" placeholder="inputBody" onChange={(e)=>{inputBody(e.target.value)}} value={body}></input>
            <br/>
            <button onClick={()=>createApi()}>Create Button</button>
        </div>
    )
    
}
export default Postapi;