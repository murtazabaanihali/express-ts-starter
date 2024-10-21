import { Router } from "express";

const router = Router();
router.use("/verify-session", (req, res) => {
    res.send("It is wokring....");
});

export default router;