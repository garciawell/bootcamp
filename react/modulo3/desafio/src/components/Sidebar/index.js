import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container, Title, SubTitle, List, Icon, Avatar,
} from './styles';

const Sidebar = () => (
  <Container>
    <List>
      <li>
        <div>
          <Avatar src="" alt="" />
        </div>
        <div>
          <Title>Wellington Garcia</Title>
          <SubTitle>garciawell</SubTitle>
        </div>
        <div>
          <Icon>Close</Icon>
        </div>
      </li>
    </List>
  </Container>
);

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Sidebar);
