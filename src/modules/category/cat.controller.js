class CatController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All category",
            message: "All category list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "Category Create request",
            message: "Category created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id+ "Get category by ID",
            message: "Category by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Updated category data",
            message: "Category updated",
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

const catCtrl = new CatController();
module.exports = catCtrl;

