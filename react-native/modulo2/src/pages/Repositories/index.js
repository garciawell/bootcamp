import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View , AsyncStorage, Text, ActivityIndicator, FlatList } from 'react-native';
import Header from '~/components/Header';
import api from '~/services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import RepositoryItem from './RepositoryItem';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false
  };

  componentDidMount() {
      this.loadRepositories();
  }


loadRepositories = async () =>{
  this.setState({
    refreshing: true
  })
      const username = await AsyncStorage.getItem('@Gihuber:username');

    const { data } = await api.get(`users/${username}/repos`);

    this.setState({data, loading: false, refreshing: false})
}

  renderListItem = ({ item }) => <RepositoryItem  repository={item}/>
  

  renderList = () => {
    const {data, refreshing} = this.state;
      // this.state.data.map(repo => <Text>{repo.name}</Text>)
    return(
      <FlatList 
      data={data} 
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={refreshing}
      />
    )
  }

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        { loading ? <ActivityIndicator style={styles.loading} /> : this.renderList() }

        {/* {this.state.data.map(repo => <Text>{repo.name}</Text>)} */}
      </View>
    );
  }
}

export default Repositories;
