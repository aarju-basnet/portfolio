import { supabase } from "../config/supabase.js";

export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  try {
    // 2. Insert into Supabase
    const { data, error } = await supabase
      .from("portfolio")
      .insert([
        {
          name,
          email,
          message,
        },
      ]);

    // 3. REAL ERROR CHECK
    if (error) {
      console.error("❌ SUPABASE ERROR:", error);

      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }

    // 4. Debug log (IMPORTANT)
    console.log("✅ INSERT RESULT:", data);

    // 5. Final response ONLY if insert succeeded
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