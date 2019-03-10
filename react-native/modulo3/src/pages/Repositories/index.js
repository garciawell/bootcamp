import React, { Component } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as RepositoriesActions } from '~/store/ducks/repositories';

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const { repositories } = this.props;
    const dataReq = repositories.data.data;
    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="999" />
        ) : (
          !!dataReq && dataReq.map(repository => <Text key={repository.id}>{repository.name}</Text>)
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
