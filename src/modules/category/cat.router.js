const catRouter = require('express').Router()
const catCtrl  = require("./cat.controller")



catRouter.route("/")
    .get(catCtrl.getAllDataList)
    .post(catCtrl.createData);

catRouter.route("/:id")
    .get(catCtrl.getSingeleRowId)
    .put(catCtrl.updateDataById)
    .delete(catCtrl.deleteDataById);


module.exports = catRouter