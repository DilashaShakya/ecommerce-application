class BannerController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All banner",
            message: "All banner list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "Banner Create request",
            message: "Banner created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id+ "Get banner by ID",
            message: "Banner by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Updated banner data",
            message: "Banner updated",
            status: "Success",
        })
    }

    deleteDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Deleated",
            message: "Deleated",
            status: "Success",
        })
    }
}

const bannerCtrl = new BannerController();
module.exports = bannerCtrl;