import React from "react";
import {Button} from "react-bootstrap"

class PureComponent extends React.PureComponent{
    constructor()
    {
        super();
        this.state = {
            count: 1
        }
        
    }
    render(){
        console.log("re render");
        return(
            <>
                <h1>Pure Component(same as useMemo hook in functional component)</h1>
                <h4>take care of Rerendering of component if state/props not changed</h4>
                <span>count: {this.state.count}</span>
                <Button onClick={() => this.setState({count: this.state.count})}>Update Count</Button>
            </>
        )
    }
}

export default PureComponent;