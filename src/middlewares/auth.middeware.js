const auth=(data) =>{
    return (req, res, next) => {
        console.log("Hello " + data)
        next();
    }
}
module.exports = auth;