import { useState } from "react"

const User =({name})=>{

    const [count ,setCount] =useState(0)
    const [count2] =useState(2)

   
 const handleClick= ()=>{  setCount(count+1)}

    return(
        <div className="user-card">
        <div>
        <button onClick={handleClick}> Increment</button>
        <h1>Count:{count}</h1>
        </div> 
<h2> NAME:{name}</h2>
<h3> Location: dehradhun</h3>
<h4> Contact: @rambal</h4>
        </div>
    )
}
export default User