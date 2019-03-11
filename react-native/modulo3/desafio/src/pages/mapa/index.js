import React, { Component, Fragment } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { Text, StyleSheet } from 'react-native';
import { Container, AnnotationContainer, AnnotationFill } from './styles';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ2FyY2lhd2VsbCIsImEiOiJjanQzbXdlOHowdWNzNDNsdnZ3dGNtZ2J3In0.NHN5yEd19JQhCC1mYcUFRA',
);

export default class Mapa extends Component {
  state = {
    point: '',
  };

  pointMap() {
    console.tron.log('TESTE');
    this.setState({
      point: 'CLICADO',
    });
  }

  renderAnnotations() {
    return (
      <MapboxGL.PointAnnotation id="rocketseat" coordinate={[-49.6451598, -27.2177659]}>
        <AnnotationContainer>
          <AnnotationFill />
        </AnnotationContainer>
        <MapboxGL.Callout title="Rocketseat House" />
      </MapboxGL.PointAnnotation>
    );
  }

  render() {
    return (
      <Fragment>
        {this.state.point ? <Text>{this.state.point}</Text> : <Text>VAZIO</Text>}
        <MapboxGL.MapView
          onPress={() => this.pointMap()}
          style={styles.Container}
          centerCoordinate={[-49.6451598, -27.2177659]}
          showUserLocation
          styleURL={MapboxGL.StyleURL.Dark}
        >
          {this.renderAnnotations()}
        </MapboxGL.MapView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
