// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import Realm from 'realm';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};

// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props);
//     this.config = {
//       realm_username: 'testcase',
//       realm_password: 'EsUc7Ysm',
//       realm_server: 'http://ros-dev.showsourcing.com:9080/',
//       syncURL: 'realm://ros-dev.showsourcing.com:9080/team/21775152-d838-4c44-9b51-fc49ec726b68'
//     }    
//     this.state = { realm: null };
    

//   }
  
//   componentWillMount() {
//     Realm.Sync.User.login(this.config.realm_server, this.config.realm_username, this.config.realm_password)
//     .then(user => {
//       console.log(user.identity)
//       return Realm.open({
//         sync: {
//           user: user,
//           url: this.config.syncURL
//         },        
//         schema: [
//           this.Audit,
//           this.Category,
//           this.Contact,
//           this.Event,
//           this.EventDescription,
//           this.Image,
//           this.Industry,
//           this.Packaging,
//           this.Price,
//           this.PriceMatrix,
//           this.PriceMatrixRow,
//           this.Product,
//           this.ProductStatus,
//           this.ProductVote,
//           this.Project,
//           this.Supplier,
//           this.SupplierType,
//           this.Tag,
//           this.Team,
//           this.TeamUser,
//           this.User,
//           this.Venue
//         ]
//     })}).then((realm) => {
//       console.log('REALM', realm)
//       console.log('REALM ACCHIEVED', realm.objects('User').length)
//       // this.setState({ realm });

//     }).catch(err => {
//       console.log('login err& !!!!!!!', err)
      
//     })
//   }

//   render() {
//     const info = this.state.realm
//       ? 'Number of dogs in this Realm: ' + this.state.realm.objects('User').length
//       : 'Loading...';

//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           {info}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
