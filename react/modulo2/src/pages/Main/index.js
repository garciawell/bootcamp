import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);
      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, response.data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Comprare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            onChange={this.handleChange}
            value={this.state.repositoryInput}
            type="text"
            name="repositoryInput"
            placeholder="usuário/repositório"
          />
          <button type="submit">OK</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
