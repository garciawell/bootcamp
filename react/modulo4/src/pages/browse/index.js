import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Title, List, Playlist,
} from './styles';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';
import Loading from '../../components/Loading';

class browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
          thumbnail: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;

    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;

    return (
      <Container>
        <Title>
          Navegar
          {playlists.loading && <Loading />}
        </Title>

        <List>
          {playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`/playlist/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(browse);
