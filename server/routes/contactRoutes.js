import express from "express";
import { handleContactForm } from "../controller/contactCOntroller.js";
import { contactLimiter } from "../middleware/ratelimiter.js";

const router = express.Router();

// POST request to /api/contact
router.post("/",  contactLimiter,  handleContactForm);

export default router;