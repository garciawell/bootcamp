import React, { Component, Fragment } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import {
  Text, StyleSheet, Modal, View, TouchableHighlight,
} from 'react-native';
import { Container, AnnotationContainer, AnnotationFill } from './styles';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ2FyY2lhd2VsbCIsImEiOiJjanQzbXdlOHowdWNzNDNsdnZ3dGNtZ2J3In0.NHN5yEd19JQhCC1mYcUFRA',
);

export default class Mapa extends Component {
  state = {
    point: '',
    modalVisible: false,
  };

  // pointMap() {
  //   console.tron.log('TESTE');
  //   this.setState({
  //     point: 'CLICADO',
  //   });
  // }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <MapboxGL.MapView
          onLongPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.Container}
          centerCoordinate={[-49.6451598, -27.2177659]}
          showUserLocation
          styleURL={MapboxGL.StyleURL.Dark}
        >
          {this.renderAnnotations()}
        </MapboxGL.MapView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
