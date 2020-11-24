import React from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./styles/App.css";

class App extends React.Component {

  state = {};

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({text: text});
  }

  render() { 
    return (
      <div className="flex-container">
        <Editor 
          onChange={(event) => this.handleChange(event)} 
          text={this.state.text} />
        <Previewer text={this.state.text} />
      </div>
    );
    }
}

export default App;
