import React from "react";
import Members from "../component/Members";
import {Table} from "react-bootstrap"
function Test()
{
    const students = ["romil", "chinku", "shreyansh"]
    const info = [
        {
            name: "romil",
            email: "chinku@gmail.com"
        },
        {
            name: "chinku",
            email: "abc@gmail.com"
        }
    ]
    // students.map((item) => {
    //     console.log(item);
    // })
    // for(let i=0; i<students.length; i++){
    //     console.log("my name is: " + students[i]);
    // }
    return(
        <div>
            <Table border={1}>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    
            {
                students.map((data, i)=> 
                    <tr key={i}>
                        <td>
                            {i+1}
                        </td>
                        <td>
                            {data}
                        </td>
                        <td>
                            N.A.
                        </td>
                    </tr>
                    
                )
            }
            {
                info.map((item, i)=>
                <tr key={i}>
                    <td>
                        {i+1}
                    </td>
                    <td>
                        {item.name}                        
                    </td>
                    <td>
                        {item.email}
                    </td>
                </tr>
                    
                )
            }
                </tbody>
            </Table>
            <h1>My Test Examples</h1>
            <Members name="Romil" />
        </div>
    )
}

export default Test;