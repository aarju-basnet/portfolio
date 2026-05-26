
const BASE_URL = import.meta.env.VITE_BASE_URL
console.log("BASE_URL =", BASE_URL);

export const sendContactMessage = async (formData) => {
  try {
    
    const response = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send message.");
    }

    return data;
  } catch (error) {
    console.error("API Error in sendContactMessage:", error);
    throw error;
  }
};