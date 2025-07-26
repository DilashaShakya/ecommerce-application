const bannerRouter = require("../modules/banners/banner.router")
const authRouter = require("../modules/auth/auth.router")

const router = require("express").Router();

router.get('/', (req, res, next) =>{
    let aboutUs = {
        data:"This is about us.",
        message:"about us message",
        status: "SUCCESS"
    }
    res.status(201).json(aboutUs)
})

router.get("/about-us", (req,res,next)=>{
    res.status(201).json({
    data: "about us content.",
    message : "about us fetched!",
    status:"SUCCESS"
    })
})

router.use("/auth", authRouter);
router.use("/banner", bannerRouter)

module.exports = router;