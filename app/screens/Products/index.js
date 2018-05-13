import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Product from '../../components/product-item';
import  { initialize } from '../../dispatchers'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  loadingWrapper: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  loading:{
    fontSize:20,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  }
});

class ProductsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = { realm: null};    
  }
  componentWillMount(){
    initialize((realm)=>{
      this.setState({realm})
      realm.objects('Product').addListener((data) => {
        this.setState({realm})
      });
    })    
  }
  render(){
    if(this.state.realm){
      return (
        <View style={styles.container}>
          <FlatList data={this.state.realm.objects('Product')} renderItem={({item})=>
            <Product item={item}/>
            }
          />
      </View>);
  } else {
    return (
      <View style={styles.loadingWrapper}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
      )
  }
    }      

  }


ProductsScreen.navigationOptions = {
  title: 'Products',
};

const mapStateToProps = state => {
  if (state.realm.realm) return {
    realm: state.realm.realm
  }
  else
    return {}
}


export default connect(mapStateToProps)(ProductsScreen);