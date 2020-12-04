import { initDB } from 'react-indexed-db';
import { useIndexedDB } from 'react-indexed-db';
import React from "react"
import { IndexedDB, AccessDB } from 'react-indexed-db';

function PanelExample() {
    return (
      <AccessDB objectStore="people">
        {db => {
          console.log('MyDB: ', db);
          return <div>{JSON.stringify(db)}</div>;
        }}
      </AccessDB>
    );
  }

export const DBConfig = (Component) => {
    return <IndexedDB
      name="MyDB"
      version={1}
      objectStoresMeta={[
        {
          store: 'people',
          storeConfig: { keyPath: 'id', autoIncrement: true },
          storeSchema: [
            { name: 'name', keypath: 'name', options: { unique: false } },
            { name: 'email', keypath: 'email', options: { unique: false } }
          ]
        }
      ]}>
      <Component />
    </IndexedDB>
  };
 
export const indexedDBCreater = (Component) => {
    console.log(DBConfig(Component));
    const { update } = useIndexedDB('people');
    update({ id: 3, name: 'NewName', email: 'NewNEmail' }).then(event => {
        alert('Edited!');
      });
}  


