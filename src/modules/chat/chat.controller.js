class ChatController {
    getAllDataList = (req, res, next) => {
        res.json({
            data: "All chat",
            message: "All chat list",
            status: "Success",
        })
    }

    createData = (req, res, next) => {
        res.json({
            data: "Chat Create request",
            message: "Chat created",
            status: "Success",
        })
    }

    getSingeleRowId = (req, res, next) => {
        res.json({
            data: req.params.id+ "Get Chat by ID",
            message: "Chat by ID",
            status: "Success",
        })
    }

    updateDataById = (req, res, next) => {
        res.json({
            data: req.params.id+ "Updated chat data",
            message: "Chat updated",
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

const chatCtrl = new ChatController();
module.exports = chatCtrl;