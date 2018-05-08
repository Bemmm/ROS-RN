/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Realm from 'realm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { realm: null };
    this.Audit = {
      name: 'Audit',
      primaryKey: 'id',
      properties: {
        id: 'string',
        creationDate: 'date',
        createdBy: 'User',
        deletedBy: 'User',
        deletionDate: 'date?',
        lastUpdatedBy: 'User',
        lastModifiedDate: 'date'
      }
    }
    
    this.Category = {
      name: 'Category',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        audit: 'Audit',
        deleted: 'bool'
      }
    }
    
    this.Contact = {
      name: 'Contact',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string?',
        phoneNumber: 'string?',
        email: 'string?',
        businessCardImage: 'Image',
        jobTitle: 'string?',
        supplier: 'Supplier',
        audit: 'Audit',
        deleted: 'bool'
      }
    }
    
    this.Event = {
      name: 'Event',
      primaryKey: 'id',
      properties: {
        id: 'string',
        alias: 'string?',
        rating: 'int?',
        description: 'EventDescription',
        audit: 'Audit',
        deleted: 'bool'
      }
    }
    
    this.EventDescription = {
      name: 'EventDescription',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        description: 'string?',
        website: 'string?',
        startDate: 'date?',
        endDate: 'date?',
        countryCode: 'string?',
        venue: 'Venue',
        logoImage: 'Image',
        global: 'bool',
        supplierCount: 'int',
        industry: 'Industry',
        primaryColor: 'string?',
        secondaryColor: 'string?'
      }
    }
    
    this.Image = {
      name: 'Image',
      primaryKey: 'id',
      properties: {
        id: 'string',
        fileName: 'string',
        orientation: 'int',
        imageType: 'string',
        audit: 'Audit',
        deleted: 'bool'
      }
    }
    
    this.Industry = {
      name: 'Industry',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string'
      }
    }
    
    this.Packaging = {
      name: 'Packaging',
      primaryKey: 'id',
      properties: {
        id: 'string',
        height: 'double?',
        width: 'double?',
        length: 'double?',
        unit: 'string?',
        itemsQuantity: 'double?',
        weight: 'double?',
        weightUnit: 'string?'
      }
    }
    
    this.Price = {
      name: 'Price',
      primaryKey: 'id',
      properties: {
        id: 'string',
        currency: 'string?',
        value: 'double?',
        baseCurrencyValue: 'double?'
      }
    }
    
    this.PriceMatrix = {
      name: 'PriceMatrix',
      primaryKey: 'id',
      properties: {
        id: 'string',
        rows: 'PriceMatrixRow[]'
      }
    }
    
    this.PriceMatrixRow = {
      name: 'PriceMatrixRow',
      primaryKey: 'id',
      properties: {
        id: 'string',
        label: 'string?',
        price: 'Price'
      }
    }
    
    this.Product = {
      name: 'Product',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        supplier: 'Supplier',
        images: 'Image[]',
        price: 'Price',
        category: 'Category',
        description: 'string?',
        event: 'Event',
        favorite: 'bool?',
        status: 'ProductStatus',
        tags: 'Tag[]',
        minimumOrderQuantity: 'int?',
        moqDescription: 'string?',
        votes: 'ProductVote[]',
        score: 'int?',
        innerCarton: 'Packaging',
        masterCarton: 'Packaging',
        priceMatrix: 'PriceMatrix',
        leadTimeValue: 'int?',
        leadTimeUnit: 'string?',
        sample: 'bool?',
        samplePrice: 'int?',
        archived: 'bool',
        audit: 'Audit',
        deleted: 'bool'
      }
    }
    
    this.ProductStatus = {
      name: 'ProductStatus',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        final: 'bool',
        color: 'string?',
        step: 'int?'
      }
    }
    
    this.ProductVote = {
      name: 'ProductVote',
      primaryKey: 'id',
      properties: {
        id: 'string',
        user: 'User',
        value: 'int'
      }
    }
    
    this.Project = {
      name: 'Project',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        logoImage: 'Image',
        description: 'string?',
        products: 'Product[]',
        audit: 'Audit',
        deleted: 'bool'
      }
    }
    
    this.Supplier = {
      name: 'Supplier',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        fullName: 'string?',
        description: 'string?',
        images: 'Image[]',
        logoImage: 'Image',
        supplierType: 'SupplierType',
        website: 'string?',
        phoneNumber: 'string?',
        country: 'string?',
        address: 'string?',
        officeEmail: 'string?',
        officePhone: 'string?',
        incoTerm: 'string?',
        harbour: 'string?',
        generalMOQ: 'int?',
        generalLeadTime: 'int?',
        tags: 'Tag[]',
        categories: 'Category[]',
        favorite: 'bool',
        globalDatabaseId: 'string?',
        audit: 'Audit',
        deleted: 'bool'
      }
    }
    
    this.SupplierType = {
      name: 'SupplierType',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        deleted: 'bool'
      }
    }
    
    this.Tag = {
      name: 'Tag',
      primaryKey: 'id',
      properties: {
        id: 'string',
        name: 'string',
        audit: 'Audit',
        deleted: 'bool'
      }
    }
    
    this.Team = {
      name: 'Team',
      primaryKey: 'id',
      properties: {
        id: 'string',
        ownerUser: 'User',
        name: 'string',
        defaultCurrency: 'string?',
        users: 'TeamUser[]',
        creationDate: 'date'
      }
    }
    
    this.TeamUser = {
      name: 'TeamUser',
      primaryKey: 'id',
      properties: {
        id: 'string',
        accessType: 'string'
      }
    }
    
    this.User = {
      name: 'User',
      primaryKey: 'id',
      properties: {
        id: 'string',
        firstName: 'string',
        lastName: 'string',
        phoneNumber: 'string?',
        companyName: 'string?',
        email: 'string',
        currentTeam: 'Team',
        preferredLanguage: 'string?',
        teams: 'TeamUser[]'
      }
    }
    
    this.Venue = {
      name: 'Venue',
      primaryKey: 'id',
      properties: {
        id: 'string',
        city: 'string?',
        name: 'string',
        latitude: 'double?',
        country: 'string?',
        longitude: 'double?',
        addressFull: 'string?'
      }
    }
    
    
  }
  
  componentWillMount() {
    Realm.Sync.User.login('http://ros-dev.showsourcing.com:9080', 'testcase', 'EsUc7Ysm')
    .then(user => {
      Realm.open({
        sync: {
          user: user,
          url: 'realm://ros-dev.showsourcing.com:9080​/~/team/21775152-d838-4c44-9b51-fc49ec726b68'
        },        
        schema: [
          this.Audit,
          this.Category,
          this.Contact,
          this.Event,
          this.EventDescription,
          this.Image,
          this.Industry,
          this.Packaging,
          this.Price,
          this.PriceMatrix,
          this.PriceMatrixRow,
          this.Product,
          this.ProductStatus,
          this.ProductVote,
          this.Project,
          this.Supplier,
          this.SupplierType,
          this.Tag,
          this.Team,
          this.TeamUser,
          this.User,
          this.Venue
        ]
    }).then((realm) => {
      console.log('REALM ACCHIEVED', realm.objects('User').length)
      this.setState({ realm });
      }).catch(err => console.log('!!!!!!!!!!!!!!!errrrr', err))

    }).catch(err => {
      console.log('login err& !!!!!!!', err)
      
    })
  }

  render() {
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' + this.state.realm.objects('User').length
      : 'Loading...';

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {info}
        </Text>
      </View>
    );
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
