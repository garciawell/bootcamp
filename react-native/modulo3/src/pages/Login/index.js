import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Input, Button, ButtonText, Error,
} from './styles';
import { Creators  as LoginActions } from '~/store/ducks/login';
import { ActivityIndicator } from 'react-native';

class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;

    loginRequest(username);
  };

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;
    return (
      <Container>
        {error && <Error>Usuário Inexistente.</Error> }
        <Input
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
        {loading ?  <ActivityIndicator size="small" color="#fff"/>
        :
          <ButtonText>Entrar</ButtonText>
        }
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
