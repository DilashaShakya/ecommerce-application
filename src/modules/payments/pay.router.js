const payRouter = require('express').Router()
const payCtrl  = require("./pay.controller")



payRouter.route("/")
    .get(payCtrl.getAllDataList)
    .post(payCtrl.createData);

payRouter.route("/:id")
    .get(payCtrl.getSingeleRowId)
    .put(payCtrl.updateDataById)
    .delete(payCtrl.deleteDataById);


module.exports = payRouter