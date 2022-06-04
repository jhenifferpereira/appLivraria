import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api';
import Livraria from './src/livraria/livraria';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      livraria: [],
      loading: true
    };
  }

  async componentDidMount(){
    const response = await api.get('https://api.jsonbin.io/b/629a92e905f31f68b3b55e51/1');
    this.setState({
      livraria: response.data,
      loading: false
    });
  }

  render() {

    if(this.state.loading){
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <ActivityIndicator color="#09A6FF" size={40}/>
        </View>
      )
    }else{
      return(
        <View style={styles.container}>
  
          <FlatList
          data={this.state.livraria}
          keyExtractor={item => item.id.toString() }
          renderItem={ ({item}) => <Livraria data={item} /> }
          />
  
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;

