class BrandController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All brand",
            message: "All brand list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "Brand Create request",
            message: "Brand created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id + " Get brand by ID",
            message: "Brand by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id + " Updated brand data",
            message: "Brand updated",
            status: "Success",
        })
    }

    deleteDataById = (req, res, next) => {
        res.json({
            data: req.params.id + " Deleted",
            message: "Deleted",
            status: "Success",
        })
    }
}

const brandCtrl = new BrandController();
module.exports = brandCtrl;
