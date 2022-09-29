import React from "react"
import {Component} from "react"

class ModifyCV extends Component{
    constructor(props){
        super(props);
        this.state = {info: props.info};
    }
    handleChange = (e, item) => {
        this.setState({info:{
            [item] : e.target.value,
        }})
    }
    handleSubmit = (data) => {
        /* we.hereweset({
            [data]
        }) */
        //take in input the current state, and update the app state in the correct section
        return 0;
    }
    render(){
        return (
            <form>
                {this.props.fields.map(item => (
                    <div>
                        <label htmlFor={this.props.section + item}>{item}</label>
                        <input type="text" id={this.props.section + item} name={item} value={this.state.info[item]} onChange={this.handleChange}/>
                    </div>
                ))}
            </form>
        )
    }
}

export default ModifyCV