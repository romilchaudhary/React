import React, {createRef} from "react"

class FormData extends React.Component
{
    constructor()
    {
        super();
        this.inputRef = createRef();
        this.anotherInputRef = createRef()
        this.state = {
            name: ""
        }
    }

    componentDidMount()
    {
        console.log(this.inputRef.current.value="romil");
    }

    componentDidUpdate(){
        console.log("inside componentDidUpdate: " + this.inputRef.current.value)
    }

    _setName = (e) => {
        this.setState({name: e.target.value})
    }
    
    getName()
    {
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor="Yellow";
    }

    render()
    {
        return(
            <>
                <h1>Ref in Class Component</h1>
                <label>Name: </label> <input type="text" ref={this.inputRef} onChange={this._setName} />
                <button onClick={() => this.getName()}>Click Me</button>
            </>
        )
    }
}

export default FormData;