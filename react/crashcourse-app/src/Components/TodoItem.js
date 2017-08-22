import React, { Component } from 'react';

class Todos extends Component {
    render() {
        return (
          <li className = "Todo" >
            <strong>{this.props.todo.title}</strong>
            </li>
        );
    }
}

Todos.propTypes = {
  todo: React.PropTypes.object
}

export default Todos;
