import React, {Component} from "react"

class Personal extends Component{
    constructor(props){
        super(props);
        // eslint-disable-next-line react/destructuring-assignment
        this.state = this.props.data;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e){
        const {value} = e.target; // il dato
        const {key} = e.target.dataset; // la key dove mettere il dato
        this.setState({
            info:{
                [key]: value,
            }
        })
    }

    render(){
        const {sectionName, info} = this.state;
        return (
            <div>
                <h3>{sectionName}</h3>
                <label htmlFor='nameInput'>Name: 
                    <input id='nameInput' placeholder='name' data-key='name' onChange={this.handleChange} value={info.name} />
                </label>
                <label htmlFor='surnameInput'>Surname: 
                    <input id='surnameInput' placeholder='surname' data-key='surname' onChange={this.handleChange} value={info.surname } />
                </label>
                <label htmlFor='dateOfBirthInput'>Date of Birth: 
                    <input id='dateOfBirthInput' placeholder='11111111' data-key='dateOfBirth' onChange={this.handleChange} value={info.dateOfBirth} />
                </label>
                <label htmlFor='phoneInput'>Phone Number: 
                    <input id='phoneInput' placeholder='0123456789' data-key='phone' onChange={this.handleChange} value={info.phone} />
                </label>
                <label htmlFor='emailInput'>Email: 
                    <input id='emailInput' placeholder='exmplae@gmail.com' data-key='email' onChange={this.handleChange} value={info.email} />
                </label>
{/*                 <input type="submit" value="Save" onClick={}></input> */}
            </div>
        )
    }
}

export default Personal