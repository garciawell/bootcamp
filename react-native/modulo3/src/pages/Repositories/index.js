import React, { Component } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import * as RepositoriesActions from '~/store/actions/repositories';

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  render() {
    console.tron.log(repositories);
    const { repositories } = this.props;
    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="999" />
        ) : (
          repositories.data.map(repository => <Text key={repository.id}>{repository.name}</Text>)
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
