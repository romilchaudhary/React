import React, {useState, useMemo} from "react";
import {Button} from "react-bootstrap";

function MemoFunctional()
{
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const useMemoData = useMemo(function alertData()
        {
            console.log("alert")
            return count+5
        }, [count]
    )    
    return(
        <>
            <h1>UseMemo functional component</h1>
            <span>count: {count}</span>
            <span>Item: {item}</span>
            <h1>{useMemoData}</h1>
            <Button onClick={() => setCount(count+1)}>Update Count</Button>
            <Button onClick={() => setItem(item+10)}>Update Item</Button>
        </>
    )
}

export default MemoFunctional;