const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.MONGODB_URI||'mongodb+srv://admin:admin@cluster0.ndbbb.gcp.mongodb.net/gogaga?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connnected');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
}

const getdb = () => {
  if(_db)
  {
    return _db;
  }
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;
