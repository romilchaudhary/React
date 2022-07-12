import React, {useState} from "react";
import Student from "../component/Student";

function Articles()
{
    const [LoggedIn, setLoggedIn] = useState(3)
    const [name, setName] = useState("Romil")

    return(
        <div>
            {
               LoggedIn == 1 ?  <h1>Welcome User, Articles display here</h1> 
               : LoggedIn == 2? <h1>Welcome, Guest</h1>
               : <h1>Who Are You? <Student name={name}/></h1>               
            }
            <button onClick={() => setName("Chinku")}>Update Name</button>            
        </div>
    )
}

export default Articles;