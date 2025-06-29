const userRouter = require('express').Router()
const userCtrl  = require("./user.controller")



userRouter.route("/")
    .get(userCtrl.getAllDataList)
    .post(userCtrl.createData);

userRouter.route("/:id")
    .get(userCtrl.getSingeleRowId)
    .put(userCtrl.updateDataById)
    .delete(userCtrl.deleteDataById);


module.exports = userRouter