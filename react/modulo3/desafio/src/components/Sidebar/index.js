import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container, Title, SubTitle, List, Icon, Avatar,
} from './styles';

const Sidebar = ({ data }) => (
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
          <Icon>Close</Icon>
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
              <Icon>Close</Icon>
            </div>
          </li>
        ))}
    </List>
    {console.log(data)}
  </Container>
);

const mapStateToProps = state => ({
  data: state.repositories.data,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Sidebar);
