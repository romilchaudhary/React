import React from "react";
import {Link} from "react-router-dom"

function DynamicUser()
{
    const users = [
        {id: 1, name:"romil"},
        {id:2, name:"chinku"},
        {id:12, name:"dsdfds"},
        {id:33, name:"dsfds"}        
    ]
    return(
        <div>
            {
                users.map((item)=>
                    <h1><Link to={`/user/${item.id}/${item.name}`}>{item.name}</Link><br/></h1>
                )
            }
        </div>
    )
}

export default DynamicUser;