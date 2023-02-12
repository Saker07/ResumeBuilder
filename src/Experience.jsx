import React, {Component} from "react"
import ItemEdit from "./ItemEdit"
import ItemShow from "./ItemShow"

class Experience extends Component{
    constructor(props){
        super(props);
        this.state=this.props.data;
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.delItem = this.delItem.bind(this);
    }

    handleChange(e, currId) {
        const {value} = e.target;
        const {key} = e.target.dataset;
        // eslint-disable-next-line react/destructuring-assignment
        const newItems = this.state.info;
        newItems[currId][key] = value;
        this.setState((state)=>({
            info: newItems,
        }))
    }

    addItem(){
        const newItems = this.state.info;
        newItems.push({
            title: '',
            location: '',
            startDate: '',
            endDate: '',
            description: ''
        });
        this.setState({
            info: newItems
        });
    }

    delItem(currId){
        const newItems = this.state.info;
        newItems.splice(currId, 1);
        this.setState({
            info: newItems
        })
    }

    render(){
        const {info, sectionName} = this.state;
        const {flag} = this.props.data;
        const {applyEditSection, editSection, cancelSection} = this.props;
        const sectionKey = 'experience';
        if(flag === 0){
            return (
                <div className="section">
                    <h3>{sectionName}</h3>
                    {info.map((item, i) => (
                        <ItemEdit data={{...info[i]}} currId={i} handleChange={this.handleChange} delItem={this.delItem}/>
                    ))}
                    <input type='button' value='Add' onClick={this.addItem}/>
                    <input type='button' value='Apply' onClick={()=>applyEditSection(sectionKey, info)}/>
                    <input type='button' value='Cancel' onClick={()=>cancelSection(sectionKey)}/>
                </div>
            );
        } 
            return (
                <div className="section">
                    <h3>{sectionName}</h3>
                    {info.map((item, i) => (
                        <ItemShow data={{...info[i]}}/>
                    ))}
                    <input type='button' value='Edit' onClick={()=>editSection(sectionKey)}/>
                </div>
            )
        
    }
}

export default Experience

// Item info={...items[i], currId = i}