import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Product from '../../components/product-item'
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

const ProductsScreen = (props) => {
  if(props.realm){
      props.realm.objects('Product').addListener((products, changes) => {
        this.forceUpdate()
      });      
      return (
        <View style={styles.container}>
          <FlatList data={props.realm.objects('Product')} renderItem={({item})=>
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


ProductsScreen.navigationOptions = {
  title: 'Products',
};

const mapStateToProps = state => {
  console.log(state.realm)
  if (state.realm.realm) return {
    realm: state.realm.realm
  }
  else
    return {}
}


export default connect(mapStateToProps)(ProductsScreen);