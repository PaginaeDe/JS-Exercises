const removeFromArray = function(array, ...toRemove) {
  return array = array.filter((item) => !(toRemove.includes(item)));
};

module.exports = removeFromArray;
