const orderDetailsRouter = require('express').Router()
const orderDetailsCtrl  = require("./orderDetails.controller")



orderDetailsRouter.route("/")
    .get(orderDetailsCtrl.getAllDataList)
    .post(orderDetailsCtrl.createData);

orderDetailsRouter.route("/:id")
    .get(orderDetailsCtrl.getSingeleRowId)
    .put(orderDetailsCtrl.updateDataById)
    .delete(orderDetailsCtrl.deleteDataById);


module.exports = orderDetailsRouter