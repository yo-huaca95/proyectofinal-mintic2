var express = require('express');
var router = express.Router();

const usuariosController = require ("../controllers/usuario.controller");

router.post("/login",usuariosController.login)
router.post("/user",usuariosController.create)
router.get("/users",usuariosController.find)
router.put("/user/:id",usuariosController.update)
router.delete("/user/:id", usuariosController.remove)

module.exports=router;