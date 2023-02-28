import React, {Component} from "react"

// eslint-disable-next-line react/prefer-stateless-function
class ItemEdit extends Component{
    render(){
        const {data, currId} = this.props;
        const {handleChange, delItem} = this.props;
        return(
            <form className="item">
                <label htmlFor={`titleInput${currId}`} className='title'>Title: 
                    <input type='input' name='title' id={`titleInput${currId}`} onChange={(e)=> handleChange(e,currId)} placeholder='Title' data-key='title'  value={data.title}/>
                </label>
                <label htmlFor={`locationInput${currId}`} className='location'>Location: 
                    <input type='input' name='location' id={`locationInput${currId}`} onChange={(e)=> handleChange(e,currId)} placeholder='Location' data-key='location' value={data.location}/>
                </label>
                <label htmlFor={`startDateInput${currId}`} className='startDate'>Start Date: 
                    <input type='input' name='startDate' id={`startDateInput${currId}`} onChange={(e)=> handleChange(e,currId)} placeholder='01012000' data-key='startDate' value={data.startDate}/>
                </label>
                <label htmlFor={`endDateInput${currId}`}className='endDate'>End Date: 
                    <input type='input' name='endDate' id={`endDateInput${currId}`} onChange={(e)=> handleChange(e,currId)} placeholder='30122022' data-key='endDate' value={data.endDate}/>
                </label>
                <label htmlFor={`descriptionInput${currId}`}className='description'>Description: 
                    <textarea name='description' id={`descriptionInput${currId}`} onChange={(e)=> handleChange(e,currId)} placeholder='Description' data-key='description' value={data.description}/>
                </label>
                <input type='button' value='Delete' onClick={()=>delItem(currId)} className='delete button'/>
            </form>
        )
    }
}

export default ItemEdit;