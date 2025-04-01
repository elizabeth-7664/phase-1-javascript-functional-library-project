function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}
function myMap(collection, callback) {
    let result = [];
    
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }
    
    return result;
}
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;

    // If no initial value is provided, use the first element of the collection
    if (accumulator === undefined) {
        accumulator = collection[0];
        collection = collection.slice(1); // start from the second element
    }

    for (let i = 0; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
    }

    return accumulator;
}
function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection)) {
            return collection[i]; // Return the first element that matches
        }
    }
    return undefined; // If no element matches, return undefined
}
function myFilter(collection, callback) {
    // Initialize an empty array to store the filtered values
    let result = [];

    // Iterate over the collection (works for both arrays and objects)
    for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
            // If the callback returns true, add the element to the result array
            if (callback(collection[key], key, collection)) {
                result.push(collection[key]);
            }
        }
    }

    // Return the filtered result array
    return result;
}
function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;  // Return the length of the array
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;  // Return the number of keys in the object
    }
  }
  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0];  // Return the first element
    } else {
      return collection.slice(0, n);  // Return the first `n` elements
    }
  }
  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];  // Return the last element
    } else {
      return collection.slice(-n);  // Return the last `n` elements
    }
  }
  function myKeys(obj) {
    let keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  function myValues(obj) {
    let values = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  }
  function myReduce(collection, callback, accumulator) {
    let isArray = Array.isArray(collection); // Check if collection is an array
    let collectionValues = isArray ? collection : Object.values(collection); // Get values if it's an object
  
    // If accumulator is not provided, use the first value of the collection
    let acc = (accumulator === undefined) ? collectionValues[0] : accumulator;
  
    for (let i = (accumulator === undefined ? 1 : 0); i < collectionValues.length; i++) {
      acc = callback(acc, collectionValues[i], collection);
    }
  
    return acc;
  }
  
  