export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + 's';
}

// whenever we run this idbPromise() function, we establish a connection to the database
export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to the database `shop-shop` with the version of 1
    const request = window.indexedDB.open('shop-shop', 1);

    // create variables to hold reference to the database, transaction (tx), and object store
    let db, tx, store;

    // if version has changed (or if this is the first time using the database), run this method and create the three object stores
    request.onupgradeneeded = function (e) {
      const db = request.result;
      // create object store for each type of data and set "primary" key index to be the `_id` of the data
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    // handle any errors with connecting
    request.onerror = function (e) {
      console.log('There was an error');
    };

    // on database open success
    request.onsuccess = function (e) {
      // save a reference of the database to the `db` variable
      db = request.result;

      // open a transaction do whatever we pass into `storeName` (must match one of the object store names)
      tx = db.transaction(storeName, 'readwrite');

      // save a reference to that object store
      store = tx.objectStore(storeName);

      // if there's any errors, inform
      db.onerror = function (e) {
        console.log('error', e);
      };

      // we use a switch statement to check what the value of the method is
      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      // when transaction is complete, close the connection
      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
/* when the database connection opens successfully, we immediately save a reference of the database to the db variable. 
   Then we open a new transaction using the .transaction() method, passing in the object store that we want to interact with and the permissions we want in this transaction. 
   The storeName—one of the three stores we created for the database—will be passed in as an argument in the idbPromise() function when we call it from a component.
   We'll save a reference to that object store so that we can perform a CRUD method on it to read, write, or update the data. 
   Then we set up two more event listeners, one for errors and one for closing the connection to the database when we're done. */
