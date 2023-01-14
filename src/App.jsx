import './App.css';
import React, { Component } from 'react';
import Personal from './Personal';
import Experience from './Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        sectionName: 'Personal Information',
        info: {
          name: '',
          surname: '',
          dateOfBirth: '',
          email: '',
          phone: '',
        },
      },
      experience: {
        sectionName: 'Experience',
        items: [],
      },
      education: {
        sectionName: 'Education',
        items: [],
      },
    };
  }

  editSection = (sectionKey, updatedData) => {
    this.setState({
      [sectionKey]: {
        fieldsData: updatedData,
      },
    });
  };

  render() {
    const {personalInfo} = this.state;
    const {experience} = this.state;
    return (
      <div>
        <Personal data={personalInfo} />
        <Experience data={experience} />
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
