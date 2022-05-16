import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Payment Received");
})

export default router;
