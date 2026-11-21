export const siteConfig = {
  name: "Hira Outsourcing",
  tagline: "China Sourcing Partner",
  headline: "Source Smarter. Import with Confidence.",
  description:
    "Your trusted China sourcing partner for finding products, connecting with suppliers, coordinating bulk orders, and managing the import process into India.",
  url: "https://hiraoutsourcing.com",
  
  // WhatsApp Configuration - Real Business WhatsApp Number
  // India country code +91 with number 9072014777 -> "919072014777" for wa.me API link
  whatsapp: {
    number: "919072014777",
    displayNumber: "+91 90720 14777",
    defaultMessage:
      "Hello Hira Outsourcing, I am interested in sourcing products from China. I would like to discuss my requirements.",
  },

  // Contact Details
  contact: {
    email: "enquiry@hiraoutsourcing.com",
    supportEmail: "support@hiraoutsourcing.com",
    addressIndia: "Operational Hub: Palakkad, Kerala, India",
    addressChina: "Sourcing & Coordination Hub: Yiwu & Shenzhen, China",
    businessHours: "Monday to Saturday: 6:00 AM – 11:00 PM IST",
  },

  // API endpoint for lead capture (if configured or local fallback)
  api: {
    enquiryEndpoint: import.meta.env.VITE_ENQUIRY_API_ENDPOINT || "/api/enquiry",
  },

  // Brand colors reference (Apple Minimalist Palette)
  colors: {
    black: "#111111",
    secondary: "#666666",
    border: "#EAEAEA",
    white: "#FFFFFF",
    subtle: "#F8F8F8",
  },
};
