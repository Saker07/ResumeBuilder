import React, {Component} from "react"

class Item extends Component{
    constructor(props){
        super(props);
        // eslint-disable-next-line react/destructuring-assignment
        this.state = this.props.data;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {value} = e.target;
        const {key} = e.target.dataset;
        this.setState({
            [key]: value
        })
    }

    delete(){}

    cancel(){}

    apply(){}

    render(){
        const {currId} = this.state;
        return(
            <form>
                <label htmlFor={`titleInput${currId}`}>Title: 
                    <input type='input' name='title' id={`titleInput${currId}`} onChange={this.handleChange} placeholder='Title' data-key='title' />
                </label>
                <label htmlFor={`locationInput${currId}`}>Location: 
                    <input type='input' name='location' id={`locationInput${currId}`} onChange={this.handleChange} placeholder='Location' data-key='location' />
                </label>
                <label htmlFor={`startDateInput${currId}`}>Start Date: 
                    <input type='input' name='startDate' id={`startDateInput${currId}`} onChange={this.handleChange} placeholder='01012000' data-key='startDate' />
                </label>
                <label htmlFor={`endDateInput${currId}`}>End Date: 
                    <input type='input' name='endDate' id={`endDateInput${currId}`} onChange={this.handleChange} placeholder='30122022' data-key='endDate' />
                </label>
                <label htmlFor={`descriptionInput${currId}`}>Description: 
                    <input type='input' name='description' id={`descriptionInput${currId}`} onChange={this.handleChange} placeholder='Description' data-key='description' />
                </label>
            </form>
        )
    }
}

export default Item;