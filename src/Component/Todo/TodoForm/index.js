// TODO FORMS

import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: ''
    }
  }

  componentDidMount() {
    console.log('todoform', this.props);

  }
  handleTextInput = input => {
    this.setState({
      formInput: input.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddTodo(this.state.formInput);
    this.setState({
      formInput: ''
    });
  }

  render() {
    return (
      <div>
        <h1>TODO FORMS </h1>
        <form onSubmit={this.handleSubmit}>
          <div>

            <label htmlFor="title">Todo</label>
            <input type="text" name="title" onChange={this.handleTextInput} />
          </div>
          <button>Add + </button>
        </form>
        <hr />
      </div >

    )
  }
}

export default TodoForm;