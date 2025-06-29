class UserController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All useruct",
            message: "All useruct list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "useruct Create request",
            message: "useruct created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id+ "Get useruct by ID",
            message: "useruct by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Updated useruct data",
            message: "useruct updated",
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

const userCtrl = new UserController();
module.exports = userCtrl;