import React from 'react';

import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodosActions from '~/store/actions/todos';

const TodoList = ({
  todos, dispatch, addTodo, maskAsCompleted,
}) => (
  <View>
    {todos.map(todo => (
      <Text
        onPress={() => maskAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        teste
        {todo.text}
      </Text>
    ))}
    <Button title="Adicionar TODO" onPress={addTodo} />
  </View>
);

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
