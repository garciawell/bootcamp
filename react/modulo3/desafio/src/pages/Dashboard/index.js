import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import Map from '../../components/Mapa';
import Sidebar from '../../components/Sidebar';

class Dashboard extends Component {
  state = {};
  // static propTypes = {
  //   getPlaylistsRequest: PropTypes.func.isRequired,
  //   playlists: PropTypes.shape({
  //     data: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.number,
  //         title: PropTypes.string,
  //         description: PropTypes.string,
  //         thumbnail: PropTypes.string,
  //       }),
  //     ),
  //     loading: PropTypes.bool,
  //   }).isRequired,
  // };

  render() {
    return (
      <Container>
        <Map />
        <Sidebar />
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
)(Dashboard);
