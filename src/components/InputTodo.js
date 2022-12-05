import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  state = {
    title: '',
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodo(this.state.title);
    } else {
      alert('Please, write an appropriate name!');
    }
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">
          <FaPlusCircle
            style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
    );
  }
}
export default InputTodo;
