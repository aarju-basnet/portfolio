import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import { globalLimiter } from "./middleware/rateLimiter.js";


dotenv.config();

const server = express();

server.use(cors({
  origin: process.env.FRONTEND_URL
}));
server.use(globalLimiter);
server.use(express.json());

server.use("/api/contact", contactRoutes);
server.get('/', (req,res)=>{
    res.send('server is live')
})

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});