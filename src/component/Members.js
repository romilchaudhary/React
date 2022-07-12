import React, {useEffect, useState} from "react";
import "../style.css";
import customStyles from "../custom.module.css"; // To import a CSS Module into the corresponding component, import the css modules stylesheet as styles or [name]Styles:

function Members(props)
{
    const [fullName, setName] = useState(props.name)

    useEffect(() => {
        console.log('useEffect called')
    }, [fullName])
    return(
        <div>
            {
                fullName ? <div><h1>Member Name is: </h1><span style={{backgroundColor:"black", color:"red"}}>{fullName}</span></div>: <h1>Memberb Name is not Defined</h1>
            }            
            {/* <button onClick={()=> props.data()}>Click Me Members</button> */}
            <button onClick={() => setName(fullName + "kumar")}><span className={`update ${customStyles.success}`}>update member name</span></button>
        </div>
    )
}
export default Members;