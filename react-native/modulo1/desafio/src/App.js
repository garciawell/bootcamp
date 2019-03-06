import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        author: 'Diego Fernandes',
        descricao:
          'Lorem ipsum is placeholder  xt commonly used  xt commonly used xt commonly used  xt commonly used text commonly used in the graphic, print, sadadad asdsad asd asd asd asd asd asd ad asd asd ',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native',
        author: 'Diego Fernandes',
        descricao:
          'Lorem ipsum is placeholder  xt commonly used  xt commonly used xt commonly used  xt commonly used text commonly used in the graphic, print, sadadad asdsad asd asd asd asd asd asd ad asd asd ',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native 4',
        author: 'Diego Fernandes',
        descricao:
          'Lorem ipsum is placeholder  xt commonly used  xt commonly used xt commonly used  xt commonly used text commonly used in the graphic, print, sadadad asdsad asd asd asd asd asd asd ad asd asd ',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native 5',
        author: 'Diego Fernandes',
        descricao:
          'Lorem ipsum is placeholder  xt commonly used  xt commonly used xt commonly used  xt commonly used text commonly used in the graphic, print, sadadad asdsad asd asd asd asd asd asd ad asd asd ',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native 3',
        author: 'Diego Fernandes',
        descricao:
          'Lorem ipsum is placeholder  xt commonly used  xt commonly used xt commonly used  xt commonly used text commonly used in the graphic, print, sadadad asdsad asd asd asd asd asd asd ad asd asd ',
      },
      {
        id: Math.random(),
        titulo: 'Aprendendo React Native2',
        author: 'Diego Fernandes',
        descricao:
          'Lorem ipsum is placeholder  xt commonly used  xt commonly used xt commonly used  xt commonly used text commonly used in the graphic, print, sadadad asdsad asd asd asd asd asd asd ad asd asd ',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          {posts.map(post => (
            <Post
              titulo={post.titulo}
              author={post.author}
              descricao={post.descricao}
              key={post.id}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee7777',
    padding: 15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
