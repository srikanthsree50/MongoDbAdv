const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const mongoUrl ='mongodb+srv://srikanthsree123:9603313561_Sree@clusterone-plhk1.mongodb.net/test?retryWrites=true&w=majority';

let _db;

const initDb = callback => {
    if(_db){
        console.log('database is already initialised...')
        return callback(null,_db);
    }
mongoClient.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client => {
    _db = client;
    return callback(null,_db);

})
.catch(err => {
    callback(err); 
})
};

const getDb = () => {
if(!_db){
    throw Error('database not initialised')
}
return _db;
}

module.exports = {
    initDb,
getDb
}