const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    usuario:{type:String, require: true, max:100},
    pass:{type:String, require: true, max:128}
    
});

module.exports = mongoose.model("usuarios",UsuarioSchema);