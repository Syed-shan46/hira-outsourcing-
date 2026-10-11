# Hira Outsourcing — Premium Corporate Website

Production-quality, responsive corporate website for **Hira Outsourcing**, a China sourcing and import partner helping Indian businesses source products directly from China.

## 🚀 Technology Stack

- **React 19 & TypeScript**: Component-driven architecture with complete type safety.
- **Vite**: Ultra-fast development server and optimized production bundler.
- **Tailwind CSS v4**: Minimalist editorial aesthetics and responsive design system.
- **React Router DOM v7**: Seamless client-side routing across all corporate sections.
- **Lucide Icons**: Cohesive, lightweight iconography.

## 🎨 Brand Design System

- **Deep Navy**: `#10243A` (Primary foundation)
- **Warm White**: `#FAFAF7` (Canvas background)
- **Charcoal**: `#202833` (Readable editorial typography)
- **Muted Gold**: `#C7A56A` (Refined accents)
- **Light Grey**: `#EEF1F4` (Clean borders and card backgrounds)
- **Typography**: Modern Plus Jakarta Sans via Google Fonts

## 📁 Project Architecture

```
/Users/xujin/Desktop/Projects/hira-outsourcing/
├── index.html                   # SEO metadata, Open Graph tags & Google Fonts
├── src/
│   ├── config/
│   │   └── site.ts              # Centralized site configurations & WhatsApp parameters
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for Enquiries, Services, Categories
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky luxury header with mobile hamburger drawer
│   │   ├── Footer.tsx           # Multi-column footer with disclaimers and live copyright
│   │   ├── Hero.tsx             # High-impact hero with China-to-India trade route visual
│   │   ├── TrustSection.tsx     # 4 value proposition pillars
│   │   ├── ServicesSection.tsx  # 6 full-scope sourcing & import services
│   │   ├── ProcessSection.tsx   # 4-step structured lifecycle timeline
│   │   ├── ProductCategories.tsx# 6 major sourcing categories with direct WhatsApp links
│   │   ├── WhyHira.tsx          # Operating discipline & split photography section
│   │   ├── AboutSection.tsx     # Authentic partner positioning
│   │   ├── EnquiryForm.tsx      # Interactive lead generation form with validation & states
│   │   ├── FAQ.tsx              # Accessible accordion with qualified answers
│   │   ├── FinalCta.tsx         # Conversion-focused bottom CTA banner
│   │   └── WhatsAppButton.tsx   # Floating WhatsApp button with prefilled messaging
│   ├── pages/
│   │   ├── Home.tsx             # Complete homepage assembling all sections
│   │   ├── Services.tsx         # Dedicated Services overview & scope clarity
│   │   ├── HowItWorks.tsx       # In-depth 4-step workflow & timeline expectations
│   │   ├── Products.tsx         # Sourcing categories portfolio & MOQ notice
│   │   ├── About.tsx            # Comprehensive corporate background
│   │   ├── Contact.tsx          # Contact portal with prefilled category parameters
│   │   ├── PrivacyPolicy.tsx    # Commercial data confidentiality & privacy terms
│   │   └── Terms.tsx            # Bilateral trade coordination terms & conditions
│   ├── App.tsx                  # Router integration
│   ├── main.tsx                 # Entry point
│   └── index.css                # Tailwind configuration and custom styling tokens
├── public/
│   ├── favicon.svg              # Brand icon
│   ├── robots.txt               # SEO crawler directives
│   └── sitemap.xml              # Search engine sitemap
└── vite.config.ts               # Vite configuration with Tailwind CSS plugin
```

## 🛠️ Local Development & Running

1. Navigate to the project folder:
   ```bash
   cd /Users/xujin/Desktop/Projects/hira-outsourcing
   ```

2. Install dependencies (already installed):
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Access the website at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## ⚙️ Key Integrations

### WhatsApp Lead Desk
Configured in `src/config/site.ts`:
- Change `whatsapp.number` to the actual business number (without `+` or spaces, e.g. `919876543210`).
- Category inquiries automatically prefill contextual messages.

### Lead Generation API
- Configured via `src/config/site.ts` (`siteConfig.api.enquiryEndpoint`) or through environment variable `VITE_ENQUIRY_API_ENDPOINT`.
- Includes complete validation for email, phone format, and required fields, preventing duplicate submissions during processing.
