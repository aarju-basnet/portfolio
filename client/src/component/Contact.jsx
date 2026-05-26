import { useState } from "react";
// Import the standalone api helper function
import { sendContactMessage } from "../service/api.js"; 

export default function Contact() {
  // 1. Manage form input state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2. Manage submission feedback state
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  // 3. Update state dynamically when typing
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 4. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const data = await sendContactMessage(formData);
      
      // If successful, show message and clear out inputs
      setStatus({ loading: false, success: data.message, error: null });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      // If something breaks, capture the backend or network error string
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-[#f5f5f5] text-black flex items-center justify-center"
    >
      <div className="w-full max-w-md text-center">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold">
          Let’s work together 
        </h2>

        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Send me a message and I’ll reply soon.
        </p>

        {/* FORM */}
        <div className="mt-8 bg-white/60 backdrop-blur-xl border border-black/10 shadow-md rounded-2xl p-4 sm:p-5">

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 text-left">

            {/* INPUT: Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl bg-white/70 border border-black/10 outline-none transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-purple-400 focus:bg-white"
            />

            {/* INPUT: Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl bg-white/70 border border-black/10 outline-none transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-purple-400 focus:bg-white"
            />

            {/* TEXTAREA: Message */}
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message..."
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl bg-white/70 border border-black/10 outline-none resize-none transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-purple-400 focus:bg-white"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status.loading}
              className="bg-purple-600 text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-lg disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS NOTIFICATIONS */}
            {status.success && (
              <p className="text-sm font-medium text-emerald-600 text-center mt-2 bg-emerald-50 py-2 rounded-xl border border-emerald-200">
                {status.success}
              </p>
            )}
            {status.error && (
              <p className="text-sm font-medium text-rose-600 text-center mt-2 bg-rose-50 py-2 rounded-xl border border-rose-200">
                {status.error}
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}