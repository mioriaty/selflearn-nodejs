/**
 *
 * @param {Array} mongoArray: Array
 */
function mongoArrayToObject(mongoArray) {
  return mongoArray.map(item => item.toObject());
}

module.exports = mongoArrayToObject;
