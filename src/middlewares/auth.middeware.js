const auth=(data) =>{ //verifying authorization and authentication
    return (req, res, next) => {
        console.log("Hello " + data)
        next();
    }
}

module.exports = auth