import React from 'react';

import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <View>
    {todos.map(todo => (
      <Text key={todo}>
        teste
        {todo}
      </Text>
    ))}
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(
  mapStateToProps,
  null,
)(TodoList);
