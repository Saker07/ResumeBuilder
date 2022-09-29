import './App.css';
import Personal from "./Personal.js"
import React, {Component} from "react"

class App extends Component {
  constructor(){
    super();
    this.state = {
      personalInfo: {
        sectionName: "Personal Information",
        data: new PersonalInfo()
      },
      experience: {
        sectionName: "Experience",
        data: [
          new Experience(),
        ]
      },
      education: {
        sectionName: "Education",
        data: [
          new Education(),
        ]
      }
    };
  }

  editPersonal = (data) => {
    this.setState({
      personalInfo:{
        data: Object.assign(data)
      }
    })
  }
  editEducation = (data) => {
    let newArr = [...data];
    this.setState({
      education:{
        data: newArr,
      }
    })
  }
  editExperience = (data) => {
    let newArr = [...data];
    this.setState({
      experience:{
        data: newArr,
      }
    })
  }

  render() {
    return (
      <div>
        <Personal data={this.state.personalInfo} endEdit={()=>alert("works!")} editSection={()=>{alert("editttt sectionnnn")}}/>
        {/* <modify/show personal */}
        {/* <modify/show experience */}
        {/* <modify/show education */}
      </div>
    );
  }
}

export default App;


function Experience(){
  this.position= "";
  this.company= "";
  this.description= "";
  this.location= "";
  this.startDate= "";
  this.endDate= "";
}

function Education(){
  this.name= ""; //uni or course name
  this.location= "";
  this.subject= "";
  this.qualification= "";
  this.startDate= "";
  this.endDate= "";
}

function PersonalInfo(){
  this.name = "";
  this.surname = "";
  this.dateOfBirth = "";
  this.mail = "";
  this.phone = "";
  this.address = "";
  this.website = "";
}