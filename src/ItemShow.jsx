import React, {Component} from "react"

// eslint-disable-next-line react/prefer-stateless-function
class ItemShow extends Component{
    render(){
        const {data} = this.props;
        return(
            <div className="item">
                <p>Title: {data.title}</p>
                <p>Location: {data.location}</p>
                <p>Start Date: {data.startDate}</p>
                <p>End Date: {data.endDate}</p>
                <p>Description: {data.description}</p>
            </div>
        )
    }
}

export default ItemShow;