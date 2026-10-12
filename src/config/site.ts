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
    addressIndia: "Operational Office: Mumbai & New Delhi Logistics Hub, India",
    addressChina: "Sourcing & Coordination Hub: Yiwu & Shenzhen, China",
    businessHours: "Monday to Saturday: 9:30 AM – 6:30 PM IST",
  },

  // API endpoint for lead capture (if configured or local fallback)
  api: {
    enquiryEndpoint: import.meta.env.VITE_ENQUIRY_API_ENDPOINT || "/api/enquiry",
  },

  // Brand colors reference
  colors: {
    navy: "#10243A",
    warmWhite: "#FAFAF7",
    charcoal: "#202833",
    gold: "#C7A56A",
    lightGrey: "#EEF1F4",
    white: "#FFFFFF",
  },
};
