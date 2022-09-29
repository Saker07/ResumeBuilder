import './App.css';
import ModifyCV from "./ModifyCV.js"
import React, {Component} from "react"

class App extends Component {
  constructor(){
    super();
    this.state = {
      personalInfo: {},
      jobs: {},
      education: {}
    };
  }
  render() {
    return (
      <div>
        <ModifyCV fields={["field1", "field2"]} section="sectionTest" info={{field2: "Example Text field2"}}/>
        {/* <ShowCV /> */}
        <p>CIao</p>
      </div>
    );
  }
}

export default App;
