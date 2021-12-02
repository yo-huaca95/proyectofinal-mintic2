const Usuario = require("../models/usuarios.model");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

let response ={
    msg:"",
    exito:false
}
exports.login = function(req, res, nex){
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    
    Usuario.findOne({usuario:req.body.usuario, pass: hashedpass}, function(err,usuario){
        let response={
            token: null
        }
        if (usuario !== null){
            response.token =jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            },"__secret__")
        }
    res.json(response)
    })
}

exports.find = function(req, res){
    Usuario.find(function(err, usuarios){
        res.json(usuarios)
    })

}

exports.create = function(req, res){
    let hashedpass2 = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    let usuario = new Usuario({
    usuario:req.body.usuario,
    pass:hashedpass2
})
 
usuario.save(function(err){
     if(err){
     console.log = false,
     response.exito = false,
     response.msg ="error al guardar el usuario"
     res.json(response)
     return;

 }
 response.exito = true,
 response.msg ="el usuario se guardo correctamente" 
 res.json(response)
 })
 
}


exports.update = (req,res) =>{
    let hashedpass3 = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    let usuario ={
        usuario:req.body.usuario,
        pass:hashedpass3 
    }
    Usuario.findByIdAndUpdate(req.params.id,{$set:usuario}, (err)=>{
        if (err){
            console.err(err)
            response.exito = false,
            response.msg ="error al actualizar el cambio al usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg ="el usuario se actualizo correctamente" 
        res.json(response)
 
    })
}

exports.remove = function(req,res){
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el Usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario eliminado correctamente"
        res.json(response)
    })
}