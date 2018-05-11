import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const ProductsScreen = (props) => {
  console.log('PROPSPSPASODPASODPAOSDPASDSDA', props.realm)
  return <View style={styles.container}>
       { props.realm ? props.realm.objects('Product').map((item, key) => {
         console.log(item)
         return (
           <View>
             <Text style={styles.welcome}>{item.name}</Text>
             <Text style={styles.welcome}>{item.category.name}</Text>
             <Text style={styles.welcome}>{item.supplier.name}</Text>
             <Text style={styles.welcome}>{item.price.currency} {item.price.value}</Text>
           </View>
          );
      }) : <Text style={styles.welcome}>Loading...</Text>}  

  </View>
}
ProductsScreen.navigationOptions = {
  title: 'Products',
};

const mapStateToProps = state => ({
  realm: state.realm.realm
});

export default connect(mapStateToProps)(ProductsScreen);