import express from "express";
import { handleContactForm } from "../controller/contactCOntroller.js";

const router = express.Router();

// POST request to /api/contact
router.post("/", handleContactForm);

export default router;