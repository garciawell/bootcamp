import React, { Component } from 'react';
import moment from 'moment';
import logo from '../../assets/img/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    loading: false,
    refLoading: false,
    repositoryError: false,
    repositories: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositoryError: false,
        repositories: [...this.state.repositories, repository],
      });

      localStorage.setItem('repositories:item', JSON.stringify(this.state.repositories));
    } catch (err) {
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  removeItem = async (e, id) => {
    e.preventDefault();
    const local = JSON.parse(localStorage.getItem('repositories:item'));

    const positionArray = local.map(e => e.id).indexOf(id);

    local.splice(positionArray, 1);
    await localStorage.setItem('repositories:item', JSON.stringify(local));

    this.setState({
      repositories: local,
    });
  };

  componentDidMount() {
    const JsonItem = JSON.parse(localStorage.getItem('repositories:item'));

    this.setState({
      repositories: JsonItem || [],
    });
  }

  refresh = async (e, id) => {
    this.setState({
      refLoading: true,
    });

    const { repositories } = this.state;

    const repository = repositories.find(repo => repo.id === id);

    try {
      const { data } = await api.get(`/repos/${repository.full_name}`);

      data.lastCommit = moment(data.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
      });

      await localStorage.setItem('repositories:item', JSON.stringify(repositories));
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({
        refLoading: false,
      });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Comprare" />
        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            onChange={this.handleChange}
            value={this.state.repositoryInput}
            type="text"
            name="repositoryInput"
            placeholder="usuário/repositório"
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>
        <CompareList
          refresh={this.refresh}
          refLoading={this.state.refLoading}
          removeItem={this.removeItem}
          repositories={this.state.repositories}
        />
      </Container>
    );
  }
}
