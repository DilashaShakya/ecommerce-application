class ProdController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All product",
            message: "All product list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "Product Create request",
            message: "Product created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id+ "Get product by ID",
            message: "Product by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Updated product data",
            message: "Product updated",
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

const prodCtrl = new ProdController();
module.exports = prodCtrl;