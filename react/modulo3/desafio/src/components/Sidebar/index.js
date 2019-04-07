import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container, List, Avatar, Title, Subtitle, Icon,
} from './styles';

const Sidebar = () => (
  <Container>
    <ul>
      <List>
        <div>
          <Avatar src="" alt="" />
        </div>
        <div>
          <Title>Fred Jason</Title>
          <Subtitle>fredJason</Subtitle>
        </div>
        <div>
          <Icon>Close</Icon>
        </div>
      </List>
    </ul>
  </Container>
);

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Sidebar);
