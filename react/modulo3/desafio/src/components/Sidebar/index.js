import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container, Title, SubTitle, List, Icon, Avatar,
} from './styles';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

const Sidebar = ({ data, removeRepositories }) => (
  <Container>
    <List>
      <li>
        <div>
          <Avatar src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Avatar" />
        </div>
        <div>
          <Title>Wellington Garcia</Title>
          <SubTitle>garciawell</SubTitle>
        </div>
        <div>
          <Icon>X</Icon>
        </div>
      </li>
      {data.length > 0
        && data.map(repo => (
          <li key={repo.id}>
            <div>
              <Avatar src={repo.avatar_url} alt="Avatar" />
            </div>
            <div>
              <Title>{repo.name}</Title>
              <SubTitle>{repo.login}</SubTitle>
            </div>
            <div>
              <Icon onClick={() => removeRepositories(repo.id)}>X</Icon>
            </div>
          </li>
        ))}
    </List>
  </Container>
);

const mapStateToProps = state => ({
  data: state.repositories.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
