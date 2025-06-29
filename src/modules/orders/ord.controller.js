class OrdController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All order",
            message: "All order list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "Order Create request",
            message: "Order created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id+ "Get order by ID",
            message: "Order by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Updated order data",
            message: "Order updated",
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

const ordCtrl = new OrdController();
module.exports = ordCtrl;