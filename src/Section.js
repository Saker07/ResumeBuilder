import React from "react"
import {Component} from "react"

class Section extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            this.props.info.subSections.map(item => {
                    <SubSection name={this.props.info.name} fields={item.fields}></SubSection>
            })
        )
    }
}