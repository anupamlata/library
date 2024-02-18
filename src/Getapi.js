import { useEffect, useState } from "react";

function Getapi() {
    const [data, setData] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/posts"

     const Callapi = () => {
         setData(data)
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log("jsonnn", json)
                setData(json)
            })
            .catch(e => { console.log("e", e) })
    }, [])
    return (
        <div>
            {data.map((item, index) => (
                <div key={item.id}>
                    <label>Title Lable</label>
                    <div>{item.title}</div>
                    <br />
                    <label>body Lable</label>
                    <div>{item.body}</div>
                    <button onClick={() => Callapi()}>Update Post</button>
                    <hr />
                </div>
            )
            )}
        </div>
    )
}
export default Getapi;