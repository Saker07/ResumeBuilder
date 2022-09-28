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
        <ModifyCV fields={["ciao", "test"]} section="tatata" info={{test: "TITOKORWKORKE"}}/>
        {/* <ShowCV /> */}
        <p>CIao</p>
      </div>
    );
  }
}

export default App;
