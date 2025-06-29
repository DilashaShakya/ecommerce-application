const brandRouter = require('express').Router()
const brandCtrl  = require("./brand.controller")



brandRouter.route("/")
    .get(brandCtrl.getAllDataList)
    .post(brandCtrl.createData);

brandRouter.route("/:id")
    .get(brandCtrl.getSingeleRowId)
    .put(brandCtrl.updateDataById)
    .delete(brandCtrl.deleteDataById);


module.exports = brandRouter;