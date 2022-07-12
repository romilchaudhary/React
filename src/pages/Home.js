import React, {useState, useEffect} from "react";
import Blogs from "./Blogs";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [show, setShow] = useState(true)
    useEffect(() => {
        console.log("useEffect")
        data() 
        function data(){
            console.log("use effect inside function")
        }        
    }, [show])
       
    return(
        <div>
            {
                show? <h1><Blogs /></h1>: <h1>Component Removed</h1>
            }
            <Button variant="primary" onClick={() => setShow(!show)}>Toggle</Button>
            {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
            <Button variant="primary">Button #1</Button>
            <Button variant="secondary" className="mx-2">Button #2</Button>
            <Button variant="success">Button #3</Button>
        </div>
    )
}

export default Home