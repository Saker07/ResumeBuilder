import React, {Component} from "react"

class Personal extends Component{
    constructor(props){
        super(props);
        // eslint-disable-next-line react/destructuring-assignment
        this.state = this.props.data;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e){
        const {value} = e.target; // the value
        const {key} = e.target.dataset; // the key in which to insert the value
        // eslint-disable-next-line react/destructuring-assignment
        const newInfo = this.state.info;
        newInfo[key] = value;
        this.setState(()=>({
            info: newInfo,
        }))
    }

    render(){
        const {sectionName, info} = this.state;
        // eslint-disable-next-line react/destructuring-assignment
        const {flag} = this.props.data;
        const {applyEditSection, cancelSection, editSection} = this.props;
        const sectionKey = 'personalInfo'; // the section key needed for the above functions
        if(flag === 0){
            return (
                <div className="section personal">
                    <h3>{sectionName}</h3>
                    <label htmlFor='nameInput' className="name"><span>Name: </span>
                        <input id='nameInput' placeholder='name' data-key='name' onChange={this.handleChange} value={info.name} />
                    </label>
                    <label htmlFor='surnameInput' className="surname"><span>Surname: </span>
                        <input id='surnameInput' placeholder='surname' data-key='surname' onChange={this.handleChange} value={info.surname } />
                    </label>
                    <label htmlFor='dateOfBirthInput' className="dateOfBirth"><span>Date of Birth: </span>
                        <input id='dateOfBirthInput' placeholder='11111111' data-key='dateOfBirth' onChange={this.handleChange} value={info.dateOfBirth} />
                    </label>
                    <label htmlFor='phoneInput' className="phone"><span>Phone Number: </span>
                        <input id='phoneInput' placeholder='0123456789' data-key='phone' onChange={this.handleChange} value={info.phone} />
                    </label>
                    <label htmlFor='emailInput' className="email"><span>Email: </span>
                        <input id='emailInput' placeholder='exmplae@gmail.com' data-key='email' onChange={this.handleChange} value={info.email} />
                    </label>
                    <div>
                        <input type="submit" value="Save" onClick={()=>{applyEditSection(sectionKey, info)}} className='save button'/>
                        <input type="submit" value="Cancel" onClick={()=>{cancelSection(sectionKey)}} className='cancel button'/>
                    </div>
                </div>
            )
        } 
            return (
                <div className="section">
                    <h3>{sectionName}</h3>
                    <p htmlFor='nameInput'><span>Name: </span><span>{info.name}</span></p>
                    <p htmlFor='surnameInput'><span>Surname: </span><span>{info.surname}</span></p>
                    <p htmlFor='dateOfBirthInput'><span>Date of Birth: </span><span>{info.dateOfBirth}</span></p>
                    <p htmlFor='phoneInput'><span>Phone Number: </span><span>{info.phone}</span></p>
                    <p htmlFor='emailInput'><span>Email: </span><span>{info.email}</span></p>
                    <input type="submit" value="Edit" onClick={()=>{editSection(sectionKey)}}/>
                </div>
            )
        
    }
}

export default Personal