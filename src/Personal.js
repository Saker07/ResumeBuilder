import React from "react"
import {Component} from "react"

class Personal extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            endEdit: this.props.endEdit,
            editSection: this.props.editSection,
        };
    }


    render(){
        return (
            <div>
                <h3>{this.state.data.sectionName}</h3>
            </div>
        )
    }
}

export default Personal