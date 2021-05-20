const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const projectController = require("../controller/projectController")

router.get("/", projectController.all);



router.get("/create", projectController.getCreate);

router.post("/create",projectController.storeCreate);



router.get("/update/:id",projectController.getUpater);

router.post("/update",projectController.storeUpdate)



router.get("/delete/:id",projectController.getDelete);

router.post("/delete", projectController.storeDelete);


module.exports = router;