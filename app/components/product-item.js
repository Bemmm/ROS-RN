import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
const Product = (props)=> (
        <View
        style={styles.product}
        key={props.item._id}>
          <View>
            <Image style={styles.image} source={{uri: props.item.images[0] ? 'https://files.showsourcing.com/s/' + props.item.images[0].fileName : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'}} />
          </View>
          <View style={styles.productDescription}>
            <Text style={styles.name}>{props.item.name}</Text>
            <Text style={styles.info}>{props.item.category.name}</Text>
            <Text style={styles.info}>{props.item.supplier.name}</Text>
            <Text style={styles.info}>{props.item.supplier.name}</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{props.item.price.currency} {props.item.price.value}</Text>
          </View>
        </View>
)

    const styles = StyleSheet.create({
        product:{
          marginLeft:15,
          marginRight:15,
          padding:0,
          paddingTop:13,
          paddingBottom:13,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          flexDirection:'row',
          borderBottomWidth: 1,
          borderColor: '#dcdcdc',
          justifyContent: 'space-between',
          alignItems:'center'
        },
        productDescription:{
          flexDirection:'column',
          flex: 3
        },
        image: {
          width:100,
          height:100,
          borderRadius:3,
        },
        name: {
          margin: 10,
          color:'#578cd0',
          fontWeight: 'bold',
          marginTop:0,
          marginBottom:0,
          fontSize:15
        },
        info: {
          color: '#acacb6',
          marginLeft:10,
          fontSize:15,
          marginTop:5,
        },
        priceWrapper:{
          width:100,
          flex:1,
          alignSelf: 'flex-end'
        },
        price:{
          textAlign: 'right',
          color: '#404040',
          fontSize:13,
          fontWeight: '200'
        }
      });
    export default Product