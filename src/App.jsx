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
        flag: 0,
      },
      experience: {
        sectionName: 'Experience',
        info: [{
          title: '',
          location: '',
          startDate: '',
          endDate: '',
          description: ''
      }],
        flag: 0,
      },
      education: {
        sectionName: 'Education',
        items: [],
        flag: 0,
      },
    };
  }

  applyEditSection = (sectionKey, updatedData) => {
    this.setState((state)=>({
      [sectionKey]: {
        // eslint-disable-next-line react/destructuring-assignment
        ...state[sectionKey],
        info: updatedData,
        flag: 1,
      },
    }));
  };

  cancelSection = (sectionKey) => {
    this.setState((state)=>({
      [sectionKey]: {
        ...state[sectionKey],
        flag: 1,
      }
    }))
  }

  editSection = (sectionKey) => {
    this.setState((state)=>({
      [sectionKey]: {
        ...state[sectionKey],
        flag: 0,
      }
    }))
  }

  render() {
    const {personalInfo} = this.state;
    const {experience} = this.state;
    return (
      <div>
        <Personal data={personalInfo} applyEditSection={this.applyEditSection} cancelSection={this.cancelSection} editSection={this.editSection}/>
        <Experience data={experience} applyEditSection={this.applyEditSection} cancelSection={this.cancelSection} editSection={this.editSection}/>
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
