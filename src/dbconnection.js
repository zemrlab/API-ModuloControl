let promise = require('bluebird');
let options = {
    promiseLib: promise
};

let pgp = require('pg-promise')(options);

//const connectString = 'postgres://postgres:1234@localhost/recaudaciones';
//const urlconnection = 'postgres://modulo4@sigap.postgres.database.azure.com:modulo4@sigap.postgres.database.azure.com:5432/tcs';
const  urlconnection = 'postgres://modulo4:modulo4@206.189.185.138:5432/tcs2';
let cn = pgp(urlconnection);

module.exports = {
    connection: cn
};
