import React from "react"
import {Component} from "react"
import Field from "./Field.js"

class Personal extends Component{
    constructor(props){
        super(props);
        this.state = this.props.data;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e){
        let value = e.target.value; // il dato
        let key = e.target.dataset.key; //la key dove mettere il dato
        this.setState({
            info:{
                [key]: value,
            }
        })
    }

    render(){
        let {sectionName, info} = this.state;
        let a = 'ciao';
        return (
            <div>
                <h3>{sectionName}</h3>
                <label htmlFor='nameInput'>Name: </label>
                <input id='nameInput' placeholder='name' data-key='name' onChange={this.handleChange} value={info.name}></input>
                <label htmlFor='surnameInput'>Name: </label>
                <input id='surnameInput' placeholder='surname' data-key='surname' onChange={this.handleChange} value={info.surname }></input>
                <label htmlFor='dateOfBirthInput'>Name: </label>
                <input id='dateOfBirthInput' placeholder='11111111' data-key='dateOfBirth' onChange={this.handleChange} value={info.dateOfBirth}></input>
                <label htmlFor='phoneInput'>Name: </label>
                <input id='phoneInput' placeholder='0123456789' data-key='phone' onChange={this.handleChange} value={info.phone}></input>
                <label htmlFor='emailInput'>Name: </label>
                <input id='emailInput' placeholder='exmplae@gmail.com' data-key='email' onChange={this.handleChange} value={info.email}></input>
{/*                 <input type="submit" value="Save" onClick={}></input> */}
            </div>
        )
    }
}

export default Personal