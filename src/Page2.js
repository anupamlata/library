import { useState } from "react"

function Page2() {
const [input,setInput] = useState(0)
    const onDecrementClick = () => {
        // const newValue = input-1
    //    const  input_ = input-1
setInput(input-1)
    }
    function onIncreament() {
        setInput(input+1)
    }

    return (
        <div>
            <button onClick={() => { onDecrementClick() }}> -  </button>
            <input type="number" value={input} />
            <button onClick={() => { onIncreament() }}>+</button>
        </div>
    )
}
export default Page2;