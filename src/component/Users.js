import React, {useRef, forwardRef} from "react";
function Users(props, customRef)
{
    const InputRef = useRef(null);
    function getRef()
    {
        InputRef.current.value = 1000;
        InputRef.current.style.color = "Red";
        InputRef.current.focus();
    }
    return(
        <div>
            <h1>Users</h1>
            <input type="text" ref={InputRef} />
            <label>Forward Ref: </label><input type="text" ref={customRef}/>
            <button onClick={()=> props.data()}>Click</button>
            <button onClick={getRef}>Get Ref</button>
        </div>
    )
}

export default forwardRef(Users);