import React, {useState} from "react";

function LiftingStateUp(props)
{
    const [myName, setMyName] = useState("RRR")
    return(
        <>
            <h1>Lifting State Up Example</h1>
            <h4>My Name Is: {myName}</h4>
            <button onClick={() => setMyName(() => props.name("romil"))}>Get Name</button>
        </>
    )
}
export default LiftingStateUp;