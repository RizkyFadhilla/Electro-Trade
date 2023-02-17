const express = require("express");
const router = express.Router();
const userRouter = require("./user")
const productRouter = require("./product")
const orderRouter = require("./order")

router.use("/user",userRouter)
router.get("/", async (req,res)=>{
    res.send("home")
})
router.use("/product",productRouter)
router.use("/order",orderRouter)

module.exports = router