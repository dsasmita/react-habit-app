import React from "react";
import FormHabit from "./components/FormHabit.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      habits: [
        { status: "Mulai", habit: "Ngaji tiap hari" },
        { status: "Mulai", habit: "Olahraga tiap pagi" },
        { status: "Berhenti", habit: "Sosmed addict" }
      ]
    };
  }
  handleNewHabit = newHabit => {
    this.setState({ habits: [...this.state.habits, newHabit] });
  };

  render() {
    return (
      <div className="App">
        <h1>HABIT APP</h1>
        <hr />
        <FormHabit onHandleNewHabit={this.handleNewHabit} />
        <hr />
        {this.state.habits.map(habit => (
          <div className="habit-container" key={habit.habit}>
            <span
              className={
                habit.status === "Mulai" ? "status green" : "status red"
              }
            >
              {habit.status}
            </span>{" "}
            - <span className="habit"> {habit.habit}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
