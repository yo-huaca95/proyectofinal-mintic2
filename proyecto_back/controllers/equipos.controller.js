const Equipo = require("../models/equipos.model");

let response ={
    msg:"",
    exito:false
}
exports.create = function(req, res){
    let equipo = new Equipo({

    codigo:req.body.codigo,
    nombre:req.body.nombre,
    descripcion:req.body.descripcion,
    tipo:req.body.tipo,
    ubicacion:req.body.ubicacion,
    marca:req.body.marca,
    estado:req.body.estado,
    responsable:req.body.responsable

})
 
equipo.save(function(err){
     if(err){
     console.log = false,
     response.exito = false,
     response.msg ="error al guardar el equipo"
     res.json(response)
     return;

 }
 response.exito = true,
 response.msg ="el equipo se guardo correctamente" 
 res.json(response)
 })
 
}

exports.find = function(req, res){
    Equipo.find(function(err, equipos){
        res.json(equipos)
    })

}

exports.findOne = function(req, res){
    Equipo.findOne({_id: req.params.id},function(err, equipo){
        res.json(equipo)
    })

}

exports.update = (req,res) =>{
    let equipo ={
        codigo:req.body.codigo,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        tipo:req.body.tipo,
        ubicacion:req.body.ubicacion,
        marca:req.body.marca,
        estado:req.body.estado,
        responsable:req.body.responsable
    }
    Equipo.findByIdAndUpdate(req.params.id,{$set:equipo}, (err)=>{
        if (err){
            console.err(err)
            response.exito = false,
            response.msg ="error al actualizar el cambio al equipo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg ="el equipo se actualizo correctamente" 
        res.json(response)
 
    })
}

exports.remove = function(req,res){
    Equipo.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el equipo"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El equipo eliminado correctamente"
        res.json(response)
    })
}