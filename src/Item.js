import React from "react"
import {Component} from "react"

class Item extends Component{
    constructor(props){
        super(props);
        this.state = this.props.data;
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let value = e.target.value;
        let key = e.target.dataset.key;
        this.setState({
            [key]: value
        })
    }

    delete(){}
    cancel(){}
    apply(){}

    render(){
        let currId = this.state.currId;
        return(
            <div>
                <label htmlFor='title'>Title: </label>
                <input type='input' name='title' id={'titleInput'+currId} onChange={this.handleChange} placeholder='Title' data-key='title'></input>
                <label htmlFor='location'>Location: </label>
                <input type='input' name='location' id={'locationInput'+currId} onChange={this.handleChange} placeholder='Location' data-key='location'></input>
                <label htmlFor='startDate'>Start Date: </label>
                <input type='input' name='startDate' id={'startDateInput'+currId} onChange={this.handleChange} placeholder='01012000' data-key='startDate'></input>
                <label htmlFor='endDate'>End Date: </label>
                <input type='input' name='endDate' id={'endDateInput'+currId} onChange={this.handleChange} placeholder='30122022' data-key='endDate'></input>
                <label htmlFor='description'>Description: </label>
                <input type='input' name='description' id={'descriptionInput'+currId} onChange={this.handleChange} placeholder='Description' data-key='description'></input>
            </div>
        )
    }
}

export default Item;