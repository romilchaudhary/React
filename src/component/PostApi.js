import React, {useState} from "react";
function PostApi()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const printError=(err)=>{
        if((typeof(err)=='string'))
            return err
        else if(err.err!=undefined)
            return err.err
        else if(err.message!=undefined)
            return err.message
        else
            return 'Some error occured.Try Again later.'
    }
    function register()
    {        
        const data = {name, email}
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch("http://192.168.1.10:5000/todo", requestOptions)
        .then(response=>{
            // console.log(response)
            if(response.ok){
                setErrorMessage("")
                return response.json()
            }                
            else{
                //throw new Error('Something went wrong')
                return Promise.reject(response)
            }
        })
        .then((result)=>{
            setMessage(result)
        })
        .catch((response) => {
            // 3. get error messages, if any
            response.json().then((error) => {
                setErrorMessage(error)
                setMessage("")
            })
        });
    }
    return(
        <>
            <h1>Post API</h1>
            {message}
            <form>
                <label>Name: </label><input required value={name} type="text" onChange={(e)=>setName(e.target.value)} /><br/><br/>
                <label>Email: </label><input value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <span style={{ color: "red" }}>{errorMessage}</span>
                <button type="button" onClick={register}>Register</button>
            </form>
        </>
    )
}

export default PostApi;