const express = require("express");
const router = express.Router();

const equiposController = require ("../controllers/equipos.controller");

router.post("/",equiposController.create)
router.get("/",equiposController.find)
router.get("/:id",equiposController.findOne)
router.put("/:id",equiposController.update)
router.delete("/:id", equiposController.remove)

module.exports=router;