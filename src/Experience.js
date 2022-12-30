import React from "react"
import {Component} from "react"
import Item from "./Item.js"

class Experience extends Component{
    constructor(props){
        super(props);
        /* this.state=this.props.data; */
        this.state= {
            items:[{},{},{}]
        }
    }
    render(){
        return (
            <div>
                {this.state.items.map((item, i) => (
                    <Item data={{...this.state.items[i], currId: i}}></Item>
                    ))}
            </div>
        )
    }
}

export default Experience

//Item info={...items[i], currId = i}