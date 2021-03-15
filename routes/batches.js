import express from "express";
const router = express.Router();

import { getBatches, addBatch } from "../controllers/batches.js";

router.get("/list", getBatches);
router.post("/add", addBatch);

export default router;
