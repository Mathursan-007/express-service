import service from './service'
import express from "express";

const router = express.Router();

router.use('/service',service)

export default router;
