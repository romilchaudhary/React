import React, {Component, forwardRef} from "react";
import styles from "../custom.module.css";

class Student extends Component
{
    constructor(props)
    {
        super(props);
        console.log('constructor called first (if called twice then Solution : Replace "React.StrictMode" by "<>" in your index.js)')
        console.log("This only applies to development mode. Lifecycles will not be double-invoked in production mode.")
        this.state = {
            email:"romil@gmail.com",
            count: 0
        }
        console.log(this.props);
    }
    componentDidMount() {
        console.log("componentDidMount() called")
        this.setState({email:"df@gmail.com"})
        this.setState(
            {
                count:this.state.count + 1
            }
        )
    }
    shouldComponentUpdate()
    {
        console.log(`should component update ${this.state.count}`)
        if(this.state.count > 5 || this.state.count == 0){
            return true;
        }
        else{
            return false;
        }        
    }
    componentDidUpdate(prevprops, prevstate, snapshot) {
        console.log("inside component update") 
        console.log(prevstate)
        console.log(this.state.count)
        if(prevstate.count === this.state.count){
            this.setState(
                {
                    count: this.state.count + 1
                }
            )
        }       
    }
    render(){
        console.log("render called after Constructor")
        return(
            <div>
                <input type="text" ref={this.customRef}/>
                <h1>I'm a student and my name is {this.props.name}, email is {this.state.email}, clicked {this.state.count} times</h1>
                <button onClick={() => this.setState({email:"chinku@test.com"})}>Update Email</button>
                <button className={`update ${styles.success}`} onClick={() => this.setState({count:this.state.count + 1})}>Should Component update</button>
            </div>            
        )
    }
}
export default Student;