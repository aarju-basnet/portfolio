import rateLimit from "express-rate-limit";

// 1. Basic IP rate limiter (GLOBAL protection)
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // max requests per IP per 15 min
  message: {
    success: false,
    error: "Too many requests. Try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// 2. Strict limiter for contact form (BOT KILLER)
export const contactLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // only 3 requests per minute per IP
  message: {
    success: false,
    error: "Too many messages. Please wait a minute.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});