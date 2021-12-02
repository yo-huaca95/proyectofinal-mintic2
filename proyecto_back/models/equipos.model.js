const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquiposSchema = new Schema({
    codigo:{type:Number, require: true, max:60},
    nombre:{type:String, require: true, max:150},
    descripcion:{type:String, require: true, max:150},
    tipo:{type:String, require: true, max:150},
    ubicacion:{type:String, require: true, max:150},
    marca:{type:String, require: false, max:150},
    estado:{type:String, require: true, max:150},
    responsable:{type:String, require: true, max:150}
});

module.exports = mongoose.model("equipos",EquiposSchema);