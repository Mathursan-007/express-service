import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Payment Received via Payment-API");
})

export default router;
