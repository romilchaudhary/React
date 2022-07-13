import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
function GetApi()
{
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://192.168.1.10:5000/todo', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
          .then((response) => response.json())
          .then((result) => {
            setData(result)
        });
    }, [])
    return(
        <>
            <h1>GET API</h1>
            {
                data.map((item, i) => 
                    <div key={i}>
                        <h1>ID is:  <Link to={`/user/${item.id}/${item.name}`}>{item.id}</Link></h1>
                        <p>Name is: {item.name}</p>
                    </div>                    
                )
            }
        </>
    )
}

export default GetApi;