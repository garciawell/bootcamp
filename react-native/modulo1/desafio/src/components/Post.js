import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Post = ({ titulo, author, descricao }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{titulo}</Text>
    <Text style={styles.subtitle}>{author}</Text>
    <Text style={styles.descricao}>{descricao}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 3,
    marginVertical: 10,
    padding: 15,
  },
  descricao: {
    color: '#777',
    borderTopWidth: 1,
    borderTopColor: '#777',
    fontSize: 14,
    marginTop: 15,
    paddingVertical: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Post;
