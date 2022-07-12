import React from "react";
import { useParams } from "react-router-dom";

function User(props)
{
    const params = useParams();
    console.log(params)
    return(
        <div>
            <h1>User id is: {params.id}</h1>
            <h3>user name is: {params.name}</h3>
        </div>
    )
}

export default User;