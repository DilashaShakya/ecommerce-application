const prodRouter = require('express').Router()
const prodCtrl  = require("./prod.controller")



prodRouter.route("/")
    .get(prodCtrl.getAllDataList)
    .post(prodCtrl.createData);

prodRouter.route("/:id")
    .get(prodCtrl.getSingeleRowId)
    .put(prodCtrl.updateDataById)
    .delete(prodCtrl.deleteDataById);


module.exports = prodRouters