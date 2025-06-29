class PayController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All pay",
            message: "All pay list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "Pay Create request",
            message: "Pay created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id+ "Get pay by ID",
            message: "Pay by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Updated pay data",
            message: "Pay updated",
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

const payCtrl = new PayController();
module.exports = payCtrl;