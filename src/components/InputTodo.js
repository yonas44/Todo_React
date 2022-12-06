import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodo } = this.props;
    if (title.trim()) {
      addTodo(title);
    } else {
      alert('Please, write an appropriate name!');
    }
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle
            style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default InputTodo;
