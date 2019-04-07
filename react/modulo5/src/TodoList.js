import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {
    newTodo: ""
  };

  handleAddTodo = () => {};

  render() {
    return (
      <div>
        <ul>
          {this.props.todos &&
            this.props.todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
        <input
          onChange={this.handleInputChage}
          value={this.state.newTodo}
          type="text"
          name="todo"
        />
        <button onClick={this.handleAddTodo}>Adicionar</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.data
});

export default connect(
  mapStateToProps,
  null
)(TodoList);
