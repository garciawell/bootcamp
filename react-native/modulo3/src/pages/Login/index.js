import React, { Component } from 'react';
import {
  Container, Input, Button, ButtonText, Error,
} from './styles';
import api from '../../services/api';

export default class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;

    try {
      await api.get(`/users/${username}`);
      // DEU CERTO
      // NAVEGAR
    } catch (err) {
      // SETAR O ERRO
    }
  };

  render() {
    const { username } = this.state;
    return (
      <Container>
        <Input
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Container>
    );
  }
}
