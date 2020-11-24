import React from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./styles/App.css";

class App extends React.Component {
  render() { 
    return (
      <div className="flex-container">
        <Editor />
        <Previewer />
      </div>
    );
    }
}

export default App;
