const bannerRouter = require('express').Router()
const bannerCtrl  = require("./banner.controller")



bannerRouter.route("/")
    .get(bannerCtrl.getAllDataList)
    .post(bannerCtrl.createData);

bannerRouter.route("/:id")
    .get(bannerCtrl.getSingeleRowId)
    .put(bannerCtrl.updateDataById)
    .delete(bannerCtrl.deleteDataById);


module.exports = bannerRouter;