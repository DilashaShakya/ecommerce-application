const ordRouter = require('express').Router()
const ordCtrl  = require("./ord.controller")



ordRouter.route("/")
    .get(ordCtrl.getAllDataList)
    .post(ordCtrl.createData);

ordRouter.route("/:id")
    .get(ordCtrl.getSingeleRowId)
    .put(ordCtrl.updateDataById)
    .delete(ordCtrl.deleteDataById);


module.exports = ordRouter