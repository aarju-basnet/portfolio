import { supabase } from "../config/supabase.js";

export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Validation FIRST
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  // 2. CREATE KEY HERE (THIS IS THE CORRECT PLACE)
  const key = `${req.ip}-${email.toLowerCase()}`;

  try {
    // 3. RATE LIMIT CHECK USING KEY
    const { data: blocked } = await supabase
      .from("rate_limits")
      .select("*")
      .eq("key", key)
      .single();

    const now = new Date();

    if (blocked) {
      const last = new Date(blocked.last_request);
      const diff = now - last;

      if (diff < 60 * 1000) {
        return res.status(429).json({
          success: false,
          error: "Please wait before sending another message.",
        });
      }
    }

    // 4. INSERT INTO SUPABASE
    const { data, error } = await supabase
      .from("portfolio")
      .insert([
        {
          name,
          email,
          message,
        },
      ]);

    if (error) {
      console.error("❌ SUPABASE ERROR:", error);

      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }

    // 5. UPDATE RATE LIMIT TABLE USING SAME KEY
    await supabase
      .from("rate_limits")
      .upsert({
        key: key,
        last_request: new Date(),
      });

    console.log("✅ INSERT RESULT:", data);

    return res.status(201).json({
      success: true,
      message: "Message stored successfully!",
    });

  } catch (err) {
    console.error("❌ SERVER ERROR:", err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};