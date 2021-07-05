function mongoToObject(mongoDb) {
  return mongoDb ? mongoDb.toObject() : mongoDb;
}

module.exports = mongoToObject;
