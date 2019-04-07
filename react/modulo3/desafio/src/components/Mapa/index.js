import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { Img } from './styles';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import { Creators as CordinationsActions } from '../../store/ducks/cordinations';
import { Creators as ModalActions } from '../../store/ducks/modal';
import Modal from '../Modal';

class Map extends Component {
  state = {
    inputRepositories: '',
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 10,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const { clickModal, handleCordinations } = this.props;
    const [latitude, longitude] = e.lngLat;

    await clickModal({ latitude, longitude });
    // await handleCordinations({ latitude, longitude });

    // console.log(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { viewport, inputRepositories } = this.state;
    const { openModal, inputRepo, repositories } = this.props;

    console.log('garcia', this.props);

    return (
      <Fragment>
        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={-23.5439948}
            longitude={-46.6065452}
            onClick={this.handleMapClick}
            captureClick
          >
            <Img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Avatar" />
          </Marker>

          {repositories
            && repositories.data.map(cor => (
              <Marker
                latitude={cor.cordinations.latitude}
                longitude={cor.cordinations.longitude}
                onClick={this.handleMapClick}
                captureClick
                key={cor.id}
              >
                <Img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Avatar" />
              </Marker>
            ))}
        </MapGL>
        {openModal && (
          <Modal handleChange={this.handleChange} inputRepositories={inputRepositories} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  openModal: state.modal.openModal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...RepositoriesActions, ...ModalActions, ...CordinationsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
