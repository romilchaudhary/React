import React, {Component} from "react";

class Blogs extends Component{
    componentWillUnmount(){
        alert("component will unmount Blogs");
    }
    render()
    {
        return(
            <div>
                <h1>Blogs Component</h1>
            </div>
        )
    }
}

export default Blogs;