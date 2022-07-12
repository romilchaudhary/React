import Reuseable from "../component/Reuseable"
function Reuse()
{
    const students = [
        { name: "romil", email: "romil@gmail.com", contact: "123", address:[
            {Hn:"11", city:"Roorkee", country:"India"},
            {Hn:"123", city:"Noida", country:"India"},
            {Hn:"222", city:"London", country:"UK"}
        ] },
        { name: "chinku", email: "abc@gmail.com", contact: "111" , address:[
            {Hn:"11", city:"Roorkee", country:"India"},
            {Hn:"123", city:"Noida", country:"India"},
            {Hn:"222", city:"London", country:"UK"}
        ]},
        { name: "kaanha", email: "kaanha@gmail.com", contact: "999", address:[
            {Hn:"11", city:"Roorkee", country:"India"},
            {Hn:"123", city:"Noida", country:"India"},
            {Hn:"222", city:"London", country:"UK"}
        ] }
    ];

    return(
        <div>
            <h1>Reuseable Component</h1>
            <Reuseable data={students}/>
        </div>
    )
}
export default Reuse;