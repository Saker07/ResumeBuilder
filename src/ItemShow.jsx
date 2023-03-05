import React, {Component} from "react"

// eslint-disable-next-line react/prefer-stateless-function
class ItemShow extends Component{
    render(){
        const {data} = this.props;
        return(
            <div className="item">
                <p><span>Title: </span><span>{data.title}</span></p>
                <p><span>Location: </span><span>{data.location}</span></p>
                <p><span>Start Date: </span><span>{data.startDate}</span></p>
                <p><span>End Date: </span><span>{data.endDate}</span></p>
                <p className="description"><span>Description: </span><span>{data.description}</span></p>
            </div>
        )
    }
}

export default ItemShow;