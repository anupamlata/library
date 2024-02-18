import { useEffect,useState } from "react";

function Putapi() {
    const [data, setData] = useState([]);

    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

    const inputTitle =(value) =>{
        setTitle(value);
    }
    const inputBody =(value) =>{
        setBody(value);
    }
    
    useEffect(() => {
      const url="https://jsonplaceholder.typicode.com/posts/1"
      fetch(url)
      .then(response =>response.json()).then(json =>{
        console.log("json",json)
        setData(json)
        setTitle(json.title);
        setBody(json.body);
      })
      .catch(e => {
        console.log("e",e)
      })
    },[]);



    const updateApi = () =>{
        const data={
            id:"1",
            title:title,
             body:body,
        }
        const url="https://jsonplaceholder.typicode.com/posts/1"
        console.log(data);
        fetch(url,{
            method:"put",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin':'*'
              },
            body:JSON.stringify(data),
            
        })
        .then(response=>response.json())
        .then(json=>{
            console.log("jsonn",json)
            
        }).catch(e=>{
            console.log("ee",e)
        })
    }
 
    return(
        <div>
            <input type="text" placeholder="inputTitle" onChange={(e)=>{inputTitle(e.target.value)}} value={title}></input>
            <br/>
            <input type="text" placeholder="inputBody" onChange={(e)=>{inputBody(e.target.value)}} value={body}></input>
            <br/>
            <button onClick={()=>updateApi()}>Update Post</button>
        </div>
    )
    
}
export default Putapi;