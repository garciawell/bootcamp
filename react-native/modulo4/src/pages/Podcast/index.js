import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  EpisodeList,
  PodcastDetails,
  Cover,
  Episode,
  Title,
  Author,
  PlayButton,
  PodcastTitle,
  Background,
  PlayButtonText,
  BackButton,
} from './styles';

export default class Podcast extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  handleBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const podcast = navigation.getParam('podcast');
    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />
              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={24} color="#fff" />
              </BackButton>
              <Cover source={{ uri: podcast.cover }} />
              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PlayButton onPress={() => {}}>
                <PlayButtonText>REPRODUZIR</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}
