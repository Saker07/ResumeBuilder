import React, {Component} from "react"
import Item from "./Item"

class Experience extends Component{
    constructor(props){
        super(props);
        /* this.state=this.props.data; */
        this.state= {
            items:[{},{},{}]
        }
    }

    render(){
        const {items} = this.state;
        return (
            <div>
                {items.map((item, i) => (
                    <Item data={{...items[i], currId: i}} />
                    ))}
            </div>
        )
    }
}

export default Experience

// Item info={...items[i], currId = i}