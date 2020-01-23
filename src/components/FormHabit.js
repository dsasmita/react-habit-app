import React from "react";

class FormHabit extends React.Component {
  constructor() {
    super();
    this.state = { habit: "", status: "Mulai" };
  }

  handleSubmit = event => {
    event.preventDefault();
    const newHabit = {
      habit: this.state.habit,
      status: this.state.status
    };
    this.setState({
      habit: "",
      status: "Mulai"
    });
    this.props.onHandleNewHabit(newHabit);
  };

  handleChangeHabit = event => {
    this.setState({ habit: event.target.value });
  };

  handleStatus = event => {
    this.setState({ status: event.target.value });
  };

  render() {
    return (
      <div className="form-input">
        <form onSubmit={this.handleSubmit}>
          <select
            name="status"
            onChange={this.handleStatus}
            value={this.state.status ? this.state.status : "Mulai"}
            ref="status"
          >
            <option value="Mulai">Mulai</option>
            <option value="Berhenti">Berhenti</option>
          </select>
          <input
            type="text"
            name="habit"
            onChange={this.handleChangeHabit}
            value={this.state.habit}
            placeholder="habit..."
          />
          <button type="submit">Simpan</button>
        </form>
      </div>
    );
  }
}

export default FormHabit;
