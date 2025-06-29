const chatRouter = require('express').Router()
const chatCtrl  = require("./chat.controller")



chatRouter.route("/")
    .get(chatCtrl.getAllDataList)
    .post(chatCtrl.createData);

chatRouter.route("/:id")
    .get(chatCtrl.getSingeleRowId)
    .put(chatCtrl.updateDataById)
    .delete(chatCtrl.deleteDataById);


module.exports = chatRouter;