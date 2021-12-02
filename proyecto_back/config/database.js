const mongoose = require("mongoose");

const host="localhost";
const port="27017";
const db = "hr";

exports.mongoConnect = ()=> {
    const mongoStringConnection= `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection=mongoose.connection;
    dbConnection.on("err",console.error.bind(console,"Mongo db conexion error"))
}