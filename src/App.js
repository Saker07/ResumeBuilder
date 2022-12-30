import './App.css';
import Personal from "./Personal.js"
import Experience from "./Experience.js"
import React, {Component} from "react"

class App extends Component {
  constructor(){
    super();
    this.state = {
      personalInfo: {
        sectionName: "Personal Information",
        info: {
          name: '',
          surname: '',
          dateOfBirth: '',
          email: '',
          phone: '',
        },
      },
      experience: {
        sectionName: "Experience",
        items: [],
      },
      education: {
        sectionName: "Education",
        items: [],
      }
    };
  }

  editSection = (sectionKey, updatedData) => {
    console.log('---------------------------------')
    console.log('data to update:' + this.state[sectionKey]);
    this.setState({
      [sectionKey]:{
        fieldsData: updatedData,
      }
    })
    console.log('data updated:' + this.state[sectionKey]);
    console.log("---------------------------------")
  }

  render() {
    return (
      <div>
        <Personal data={this.state.personalInfo}/>
        <Experience data={this.state.experience}/>
        {/* <modify/show personal */}
        {/* <modify/show experience */}
        {/* <modify/show education */}
      </div>
    );
  }
}

export default App;


/* function Experience(){
  //fields data
  this.position= "";
  this.company= "";
  this.description= "";
  this.location= "";
  this.startDate= "";
  this.endDate= "";
}

function Education(){
  //fields data
  this.name= ""; //uni or course name
  this.location= "";
  this.subject= "";
  this.qualification= "";
  this.startDate= "";
  this.endDate= "";
} */