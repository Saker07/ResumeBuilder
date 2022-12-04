import React from "react"
import {Component} from "react"

class Field extends Component{
    constructor(props){
        super(props);
        this.state = {
            test: "ciao",
        };
    }
    render(){
        let elemId = this.props.id;
        let elemType = this.props.type;
        let elemName = this.props.name;
        let handleChange = this.props.handleChange;
        elemName = typeof(elemName)!="string" ? elemName : elemName.charAt(0).toUpperCase() + elemName.slice(1);
        return(
            <div>
                <label htmlFor={elemId}>{elemName}: </label>
                <input type={elemType} name={elemName} id={elemId} onChange={handleChange} value={this.props.value || ''}></input>
            </div>
        )
    }
}

export default Field;