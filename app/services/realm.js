import Realm from 'realm';
import Schemas from '../config/schemas';
import config from '../config/realm';

export default {
  realm: null,
  initialize: (callback) => {
    Realm.Sync.User.login(config.realm_server, config.realm_username, config.realm_password).then(user => {
          return Realm.open({
            sync: {
              user: user,
              url: config.syncURL
            },
            schema: Schemas
          }).then(realm => {
            this.realm = realm;
        })
    })
    .catch(err => console.log('ERROR', err)).then(data => {
       this.realm = data
    })
  }
};