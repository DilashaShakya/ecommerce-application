class OrderDetailsController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All order details",
            message: "All order details list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "Order details Create request",
            message: "Order details created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id+ "Get order details by ID",
            message: "Order details by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Updated order details data",
            message: "Order details updated",
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

const orderDetailsCtrl = new OrderDetailsController();
module.exports = orderDetailsCtrl;