import React from "react";
import FormHabit from "./components/FormHabit.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>HABIT APP</h1>
        <hr />
        <FormHabit />
      </div>
    );
  }
}

export default App;
