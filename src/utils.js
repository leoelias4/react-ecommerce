function removeDuplicatesBy(keyFn, array) {
  let mySet = new Set();
  return { products: [...array.products.filter(function(x) {
      let key = keyFn(x), isNew = !mySet.has(key);
      if (isNew) mySet.add(key);
        return isNew;
      })]
    };
}

export default {
    removeDuplicatesBy
}