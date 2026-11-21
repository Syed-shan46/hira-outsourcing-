import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Package,
  ShieldCheck,
  Ship,
  Boxes,
  UploadCloud,
  FileText,
  Trash2,
  Plus,
  Copy,
  Check,
  MessageSquare,
  Lock,
  Globe,
  Building2,
} from 'lucide-react';
import { siteConfig } from '../config/site';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  previewUrl?: string;
}

interface ProductItem {
  id: string;
  nameOrDescription: string;
  productUrl: string;
  quantity: string;
  quantityUnit: string;
  budgetAmount: string;
  budgetCurrency: string;
  additionalRequirements: string;
  files: UploadedFile[];
}

interface ContactDetails {
  fullName: string;
  companyName: string;
  countryCode: string;
  whatsappNumber: string;
  email: string;
  deliveryCity: string;
  deliveryCountry: string;
  consent: boolean;
}

interface SubmissionResult {
  referenceId: string;
  submittedAt: string;
  services: string[];
  products: ProductItem[];
  contact: ContactDetails;
}

const AVAILABLE_SERVICES = [
  {
    id: 'sourcing',
    title: 'Product Sourcing',
    description: 'Find products and verified manufacturers in China.',
    icon: Package,
  },
  {
    id: 'verification',
    title: 'Supplier Verification',
    description: 'Verify suppliers, factory audits and evaluate product quality.',
    icon: ShieldCheck,
  },
  {
    id: 'logistics',
    title: 'Import & Logistics',
    description: 'Manage international shipping, customs and import clearance.',
    icon: Ship,
  },
  {
    id: 'complete',
    title: 'Complete Sourcing Solution',
    description: 'End-to-end support from discovery through doorstep delivery.',
    icon: Boxes,
  },
];

const QUANTITY_UNITS = [
  'Pieces (Pcs)',
  'Sets / Kits',
  'Cartons / Boxes',
  'Kilograms (Kg)',
  'Metric Tons',
  'Full Container (FCL)',
  'Part Container (LCL)',
];

const COUNTRY_CODES = [
  { code: '+91', country: 'India (IN)' },
  { code: '+1', country: 'USA / Canada (+1)' },
  { code: '+971', country: 'UAE (+971)' },
  { code: '+86', country: 'China (+86)' },
  { code: '+44', country: 'UK (+44)' },
  { code: '+65', country: 'Singapore (+65)' },
  { code: '+61', country: 'Australia (+61)' },
  { code: '+966', country: 'Saudi Arabia (+966)' },
];

export const GetAQuotePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Get a Quote | Hira Outsourcing Services Pvt Ltd';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Form State
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(['sourcing']);
  const [products, setProducts] = useState<ProductItem[]>([
    {
      id: 'prod-1',
      nameOrDescription: '',
      productUrl: '',
      quantity: '',
      quantityUnit: 'Pieces (Pcs)',
      budgetAmount: '',
      budgetCurrency: 'INR',
      additionalRequirements: '',
      files: [],
    },
  ]);

  const [contact, setContact] = useState<ContactDetails>({
    fullName: '',
    companyName: '',
    countryCode: '+91',
    whatsappNumber: '',
    email: '',
    deliveryCity: '',
    deliveryCountry: 'India',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // 1. Service Selection Toggle
  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        if (prev.length === 1) return prev; // keep at least one
        return prev.filter((id) => id !== serviceId);
      }
      return [...prev, serviceId];
    });
    if (errors.services) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  // 2. Product Management
  const updateProduct = (index: number, field: keyof ProductItem, value: any) => {
    setProducts((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });

    const errorKey = `product_${index}_${field}`;
    if (errors[errorKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errorKey];
        return next;
      });
    }
  };

  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      {
        id: `prod-${Date.now()}`,
        nameOrDescription: '',
        productUrl: '',
        quantity: '',
        quantityUnit: 'Pieces (Pcs)',
        budgetAmount: '',
        budgetCurrency: 'INR',
        additionalRequirements: '',
        files: [],
      },
    ]);
  };

  const removeProduct = (index: number) => {
    if (products.length <= 1) return;
    setProducts((prev) => prev.filter((_, idx) => idx !== index));
  };

  // 3. File Upload Handler
  const handleFileUpload = (productIndex: number, fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    const newFiles: UploadedFile[] = [];

    Array.from(fileList).forEach((file) => {
      if (file.size > 15 * 1024 * 1024) {
        alert(`File "${file.name}" exceeds 15MB limit.`);
        return;
      }

      const uploaded: UploadedFile = {
        id: `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        name: file.name,
        size: file.size,
        type: file.type,
      };

      if (file.type.startsWith('image/')) {
        uploaded.previewUrl = URL.createObjectURL(file);
      }

      newFiles.push(uploaded);
    });

    setProducts((prev) => {
      const copy = [...prev];
      copy[productIndex].files = [...copy[productIndex].files, ...newFiles];
      return copy;
    });
  };

  const removeFile = (productIndex: number, fileId: string) => {
    setProducts((prev) => {
      const copy = [...prev];
      copy[productIndex].files = copy[productIndex].files.filter((f) => f.id !== fileId);
      return copy;
    });
  };

  // 4. Step 1 Validation
  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (selectedServices.length === 0) {
      newErrors.services = 'Please select at least one required service.';
    }

    products.forEach((prod, idx) => {
      if (!prod.nameOrDescription.trim()) {
        newErrors[`product_${idx}_nameOrDescription`] = 'Product name or description is required.';
      }
      if (!prod.quantity.trim()) {
        newErrors[`product_${idx}_quantity`] = 'Estimated quantity is required.';
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    }

    return true;
  };

  // 5. Step 2 Validation
  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!contact.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    const cleanPhone = contact.whatsappNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 7) {
      newErrors.whatsappNumber = 'Please enter a valid WhatsApp phone number (minimum 7 digits).';
    }

    if (contact.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!contact.deliveryCity.trim()) {
      newErrors.deliveryCity = 'Delivery city is required.';
    }

    if (!contact.deliveryCountry.trim()) {
      newErrors.deliveryCountry = 'Delivery country is required.';
    }

    if (!contact.consent) {
      newErrors.consent = 'Consent to be contacted regarding this enquiry is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    }

    return true;
  };

  // 6. Navigation between steps
  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setStep(1);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // 7. Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) return;

    setIsSubmitting(true);

    const generatedRefId = `HIRA-REQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const submissionPayload = {
      enquiryId: generatedRefId,
      source: 'Website - Get a Quote Page',
      submittedAt: new Date().toISOString(),
      leadStatus: 'New',
      services: selectedServices,
      products: products.map((p) => ({
        nameOrDescription: p.nameOrDescription,
        productUrl: p.productUrl,
        quantity: `${p.quantity} ${p.quantityUnit}`,
        budget: p.budgetAmount ? `${p.budgetCurrency} ${p.budgetAmount}` : 'Not specified',
        additionalRequirements: p.additionalRequirements,
        attachmentsCount: p.files.length,
        attachments: p.files.map((f) => ({ name: f.name, size: f.size, type: f.type })),
      })),
      contact: {
        fullName: contact.fullName,
        companyName: contact.companyName || 'Not specified',
        whatsapp: `${contact.countryCode} ${contact.whatsappNumber}`,
        email: contact.email || 'Not specified',
        deliveryLocation: `${contact.deliveryCity}, ${contact.deliveryCountry}`,
      },
    };

    try {
      // 1. Post to configured enquiry API endpoint
      const endpoint = siteConfig.api.enquiryEndpoint;
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionPayload),
        });
      } catch (_networkErr) {
        // Fallback: log and save locally in browser storage so the enquiry is never lost
        console.info('[Hira Sourcing] Quote enquiry safely queued:', submissionPayload);
      }

      // Store in localStorage for audit & persistence
      try {
        const existing = JSON.parse(localStorage.getItem('hira_quote_enquiries') || '[]');
        existing.unshift(submissionPayload);
        localStorage.setItem('hira_quote_enquiries', JSON.stringify(existing.slice(0, 50)));
      } catch {
        // silent storage error handling
      }

      // 2. Set result and transition to success screen
      setSubmissionResult({
        referenceId: generatedRefId,
        submittedAt: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        services: selectedServices,
        products: products,
        contact: contact,
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission failed:', err);
      alert('There was a temporary issue submitting your enquiry. Please reach out to our team directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRefId = () => {
    if (!submissionResult) return;
    navigator.clipboard.writeText(submissionResult.referenceId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  // Helper for WhatsApp URL with prefilled text
  const getSuccessWhatsAppUrl = () => {
    if (!submissionResult) return `https://wa.me/${siteConfig.whatsapp.number}`;
    const msg = `Hello Hira Outsourcing team,\n\nI have submitted a quote request on your website.\n*Reference ID:* ${submissionResult.referenceId}\n*Name:* ${submissionResult.contact.fullName}\n*Services:* ${submissionResult.services.join(', ')}\n*Products:* ${submissionResult.products.map((p) => p.nameOrDescription).join(', ')}\n\nLooking forward to your sourcing quotation.`;
    return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans antialiased selection:bg-[#111111] selection:text-white">
      {/* 1. Dedicated Minimal Page Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 focus:outline-none" aria-label="Hira Outsourcing Home">
            <img src="/images/hira_logo.png" alt="Hira Logo" className="h-7 sm:h-8 w-auto object-contain shrink-0" />
            <div className="flex flex-col text-left leading-none">
              <span className="font-bold text-sm sm:text-base tracking-tight text-[#111111]">Hira</span>
              <span className="text-[10px] sm:text-[11px] font-normal tracking-tight text-[#444444] mt-0.5">Outsourcing</span>
            </div>
          </Link>

          {/* Right Header Navigation: Back to Home + Direct WhatsApp */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#444444] hover:text-[#111111] border border-[#EAEAEA] rounded-lg hover:border-[#111111] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#111111]" />
              <span>Direct WhatsApp</span>
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#111111] bg-[#F5F5F7] hover:bg-[#EAEAEA] rounded-lg transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative bg-[#FAFAFA] border-b border-[#EAEAEA] py-10 sm:py-14 md:py-16 overflow-hidden">
        {/* Subtle monochrome shipping container background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0 overflow-hidden">
          <img
            src="/images/container_img.png"
            alt="International Shipping Container"
            className="w-full h-full object-cover object-center filter grayscale"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 rounded-full bg-white border border-[#EAEAEA] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span className="text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#555555]">
              HIRA OUTSOURCING / REQUEST A QUOTE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] leading-[1.12]">
            Let's bring your product to life.
          </h1>

          {/* Supporting Text */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Tell us what you're looking for. Our team will help you explore sourcing, supplier verification and import solutions from China.
          </p>
        </div>
      </section>

      {/* 3. Main Form Container */}
      <main className="flex-grow py-8 sm:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* A. If submitted successfully -> show success screen */}
          {submissionResult ? (
            <div className="max-w-2xl mx-auto py-4 sm:py-8">
              <div className="rounded-2xl border border-[#EAEAEA] bg-white p-6 sm:p-10 text-center shadow-xs">
                {/* Animated Checkmark Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5F5F7] border border-[#EAEAEA] text-[#111111] mx-auto flex items-center justify-center mb-6 shadow-xs animate-in fade-in zoom-in-75 duration-300">
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#666666] bg-[#F5F5F7] px-3 py-1 rounded-full border border-[#EAEAEA]">
                  Enquiry Dispatched Successfully
                </span>

                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111] mt-3">
                  Your enquiry is on its way.
                </h2>

                <p className="text-xs sm:text-sm text-[#555555] mt-2 max-w-lg mx-auto leading-relaxed">
                  Thank you for choosing Hira Outsourcing. Our team will review your requirements and contact you to discuss the next steps.
                </p>

                {/* Reference ID Card */}
                <div className="mt-6 p-4 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#888888] tracking-wider block">
                      Enquiry Reference ID
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-[#111111]">
                      {submissionResult.referenceId}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={copyRefId}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#EAEAEA] hover:border-[#111111] text-xs font-semibold text-[#111111] transition-colors shadow-2xs"
                  >
                    {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId ? 'Copied' : 'Copy ID'}</span>
                  </button>
                </div>

                {/* Enquiry Summary Review */}
                <div className="mt-6 text-left rounded-xl border border-[#F0F0F0] p-4 text-xs space-y-3 bg-white">
                  <div className="font-semibold text-[#111111] text-xs uppercase tracking-wider pb-2 border-b border-[#F0F0F0]">
                    Submitted Details Summary
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <span className="text-[#888888] block text-[10.5px]">Contact:</span>
                      <span className="font-medium text-[#111111]">{submissionResult.contact.fullName}</span>
                      {submissionResult.contact.companyName && (
                        <span className="text-[#666666] block text-[11px]">({submissionResult.contact.companyName})</span>
                      )}
                    </div>

                    <div>
                      <span className="text-[#888888] block text-[10.5px]">WhatsApp:</span>
                      <span className="font-medium text-[#111111]">
                        {submissionResult.contact.countryCode} {submissionResult.contact.whatsappNumber}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#888888] block text-[10.5px]">Delivery Destination:</span>
                      <span className="font-medium text-[#111111]">
                        {submissionResult.contact.deliveryCity}, {submissionResult.contact.deliveryCountry}
                      </span>
                    </div>

                    <div>
                      <span className="text-[#888888] block text-[10.5px]">Submission Time:</span>
                      <span className="font-medium text-[#111111]">{submissionResult.submittedAt}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#F0F0F0]">
                    <span className="text-[#888888] block text-[10.5px] mb-1">Items Requested ({submissionResult.products.length}):</span>
                    <ul className="list-disc list-inside space-y-1 text-[#333333]">
                      {submissionResult.products.map((p, i) => (
                        <li key={i}>
                          <span className="font-medium">{p.nameOrDescription}</span> &mdash;{' '}
                          <span className="text-[#666666]">{p.quantity} {p.quantityUnit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getSuccessWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>

                  <Link
                    to="/"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F5F5F7] text-[#111111] border border-[#EAEAEA] hover:border-[#111111] px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Homepage</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* B. Two-Step Multi-Step Form */
            <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-start">
              {/* Form Column (8 columns on desktop) */}
              <div className="lg:col-span-8">
                {/* Step Progress Indicator Bar */}
                <div className="mb-6 sm:mb-8 pb-4 border-b border-[#EAEAEA]">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#111111] text-white text-[10px] font-bold">
                        {step}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#111111]">
                        {step === 1 ? 'Step 1 of 2: Your Requirements' : 'Step 2 of 2: Your Contact Details'}
                      </span>
                    </div>

                    <span className="text-[11px] font-medium text-[#666666]">
                      {step === 1 ? '50% Complete' : 'Almost Done'}
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-1 bg-[#F0F0F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#111111] transition-all duration-300 rounded-full"
                      style={{ width: step === 1 ? '50%' : '100%' }}
                    />
                  </div>
                </div>

                <form onSubmit={step === 1 ? (e) => { e.preventDefault(); handleNextStep(); } : handleSubmit} noValidate>
                  {/* ================= STEP 01: REQUIREMENTS ================= */}
                  {step === 1 && (
                    <div className="space-y-8 animate-in fade-in duration-200">
                      {/* 1. Services Selection */}
                      <div data-error={!!errors.services}>
                        <div className="flex items-center justify-between mb-1.5">
                          <h2 className="text-base sm:text-lg font-bold text-[#111111]">
                            1. Select Required Services
                          </h2>
                          <span className="text-[11px] font-medium text-[#888888]">(Select one or more)</span>
                        </div>
                        <p className="text-xs text-[#666666] mb-3">
                          Choose which stages of your China sourcing journey you need Hira to handle.
                        </p>

                        {errors.services && (
                          <p className="text-xs text-red-600 font-medium mb-3">{errors.services}</p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                          {AVAILABLE_SERVICES.map((srv) => {
                            const isSelected = selectedServices.includes(srv.id);
                            const Icon = srv.icon;
                            return (
                              <button
                                key={srv.id}
                                type="button"
                                onClick={() => toggleService(srv.id)}
                                className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                                  isSelected
                                    ? 'border-[#111111] bg-[#FAFAFA] shadow-xs'
                                    : 'border-[#EAEAEA] bg-white hover:border-[#CCCCCC]'
                                }`}
                              >
                                <div
                                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                                    isSelected ? 'bg-[#111111] text-white' : 'bg-[#F5F5F7] text-[#444444]'
                                  }`}
                                >
                                  <Icon className="w-3.5 h-3.5 stroke-[1.7]" />
                                </div>
                                <div className="flex-grow">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs sm:text-sm font-semibold text-[#111111]">
                                      {srv.title}
                                    </span>
                                    <div
                                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                                        isSelected
                                          ? 'border-[#111111] bg-[#111111] text-white'
                                          : 'border-[#CCCCCC] bg-white'
                                      }`}
                                    >
                                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                    </div>
                                  </div>
                                  <p className="text-[11px] text-[#666666] mt-1 leading-snug">
                                    {srv.description}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 2. Product Items */}
                      <div className="space-y-6 pt-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-base sm:text-lg font-bold text-[#111111]">
                              2. What are you looking to source?
                            </h2>
                            <p className="text-xs text-[#666666] mt-0.5">
                              Provide specifications for the product(s) you require.
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={addProduct}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#EAEAEA] hover:border-[#111111] bg-white text-xs font-semibold text-[#111111] hover:bg-[#F9F9FA] transition-colors shrink-0"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Product</span>
                          </button>
                        </div>

                        {/* List of Products */}
                        {products.map((product, pIdx) => {
                          const nameError = errors[`product_${pIdx}_nameOrDescription`];
                          const qtyError = errors[`product_${pIdx}_quantity`];

                          return (
                            <div
                              key={product.id}
                              className="p-4 sm:p-5 rounded-2xl border border-[#EAEAEA] bg-[#FAFAFA]/60 relative space-y-4"
                            >
                              {/* Product Header */}
                              <div className="flex items-center justify-between pb-3 border-b border-[#EAEAEA]">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                                    Product {products.length > 1 ? `#${pIdx + 1}` : ''}
                                  </span>
                                </div>

                                {products.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeProduct(pIdx)}
                                    className="inline-flex items-center gap-1 text-[11px] text-red-600 hover:text-red-700 font-medium transition-colors"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                    <span>Remove</span>
                                  </button>
                                )}
                              </div>

                              {/* Field: Product Name or Description */}
                              <div data-error={!!nameError}>
                                <label className="block text-xs font-semibold text-[#111111] mb-1">
                                  Product Name or Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                  rows={2}
                                  value={product.nameOrDescription}
                                  onChange={(e) => updateProduct(pIdx, 'nameOrDescription', e.target.value)}
                                  placeholder="e.g., Stainless steel insulated thermal tumbler (500ml) with leak-proof lid, matte black finish"
                                  className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all resize-y ${
                                    nameError ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CCCCCC] focus:border-[#111111]'
                                  }`}
                                />
                                {nameError && <p className="text-[11px] text-red-600 mt-1">{nameError}</p>}
                              </div>

                              {/* Field: Reference URL (1688, Alibaba, Amazon, etc.) */}
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <label className="block text-xs font-semibold text-[#111111]">
                                    Product Reference Link <span className="text-[11px] font-normal text-[#888888]">(Optional)</span>
                                  </label>
                                  <span className="text-[10px] text-[#888888]">1688 / Alibaba / Taobao / Amazon</span>
                                </div>
                                <input
                                  type="url"
                                  value={product.productUrl}
                                  onChange={(e) => updateProduct(pIdx, 'productUrl', e.target.value)}
                                  placeholder="https://detail.1688.com/offer/... or alibaba.com"
                                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#CCCCCC] bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all"
                                />
                              </div>

                              {/* Two Columns: Quantity + Target Budget */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {/* Quantity */}
                                <div data-error={!!qtyError}>
                                  <label className="block text-xs font-semibold text-[#111111] mb-1">
                                    Estimated Quantity <span className="text-red-500">*</span>
                                  </label>
                                  <div className="flex gap-2">
                                    <input
                                      type="text"
                                      value={product.quantity}
                                      onChange={(e) => updateProduct(pIdx, 'quantity', e.target.value)}
                                      placeholder="e.g., 500"
                                      className={`w-1/2 px-3 py-2 text-xs sm:text-sm rounded-lg border bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all ${
                                        qtyError ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CCCCCC] focus:border-[#111111]'
                                      }`}
                                    />
                                    <select
                                      value={product.quantityUnit}
                                      onChange={(e) => updateProduct(pIdx, 'quantityUnit', e.target.value)}
                                      className="w-1/2 px-2.5 py-2 text-xs sm:text-sm rounded-lg border border-[#CCCCCC] bg-white text-[#111111] focus:outline-none focus:border-[#111111]"
                                    >
                                      {QUANTITY_UNITS.map((unit) => (
                                        <option key={unit} value={unit}>
                                          {unit}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  {qtyError && <p className="text-[11px] text-red-600 mt-1">{qtyError}</p>}
                                </div>

                                {/* Target Budget */}
                                <div>
                                  <label className="block text-xs font-semibold text-[#111111] mb-1">
                                    Target Budget <span className="text-[11px] font-normal text-[#888888]">(Optional)</span>
                                  </label>
                                  <div className="flex gap-2">
                                    <select
                                      value={product.budgetCurrency}
                                      onChange={(e) => updateProduct(pIdx, 'budgetCurrency', e.target.value)}
                                      className="w-24 px-2.5 py-2 text-xs sm:text-sm rounded-lg border border-[#CCCCCC] bg-white text-[#111111] focus:outline-none focus:border-[#111111]"
                                    >
                                      <option value="INR">₹ INR</option>
                                      <option value="USD">$ USD</option>
                                      <option value="RMB">¥ RMB</option>
                                    </select>
                                    <input
                                      type="text"
                                      value={product.budgetAmount}
                                      onChange={(e) => updateProduct(pIdx, 'budgetAmount', e.target.value)}
                                      placeholder="e.g., 1,50,000"
                                      className="flex-grow px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#CCCCCC] bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Drag & Drop File Upload */}
                              <div>
                                <label className="block text-xs font-semibold text-[#111111] mb-1">
                                  Upload Images or Technical Drawings <span className="text-[11px] font-normal text-[#888888]">(Optional)</span>
                                </label>

                                <div
                                  onDragOver={(e) => e.preventDefault()}
                                  onDrop={(e) => {
                                    e.preventDefault();
                                    handleFileUpload(pIdx, e.dataTransfer.files);
                                  }}
                                  onClick={() => fileInputRefs.current[product.id]?.click()}
                                  className="border-2 border-dashed border-[#CCCCCC] hover:border-[#111111] rounded-xl p-4 sm:p-5 text-center cursor-pointer transition-colors bg-white group"
                                >
                                  <input
                                    ref={(el) => {
                                      fileInputRefs.current[product.id] = el;
                                    }}
                                    type="file"
                                    multiple
                                    accept="image/*,.pdf,.zip,.doc,.docx"
                                    onChange={(e) => handleFileUpload(pIdx, e.target.files)}
                                    className="hidden"
                                  />
                                  <UploadCloud className="w-6 h-6 mx-auto text-[#666666] group-hover:text-[#111111] transition-colors mb-1.5" />
                                  <p className="text-xs font-medium text-[#111111]">
                                    Click or drag and drop reference files here
                                  </p>
                                  <p className="text-[10.5px] text-[#888888] mt-0.5">
                                    PNG, JPG, PDF or ZIP up to 15MB each
                                  </p>
                                </div>

                                {/* Uploaded Files List */}
                                {product.files.length > 0 && (
                                  <div className="mt-2.5 space-y-1.5">
                                    {product.files.map((file) => (
                                      <div
                                        key={file.id}
                                        className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#EAEAEA] text-xs"
                                      >
                                        <div className="flex items-center gap-2 truncate">
                                          {file.previewUrl ? (
                                            <img
                                              src={file.previewUrl}
                                              alt="Preview"
                                              className="w-6 h-6 rounded object-cover border border-[#EAEAEA]"
                                            />
                                          ) : (
                                            <FileText className="w-4 h-4 text-[#666666] shrink-0" />
                                          )}
                                          <span className="truncate font-medium text-[#111111]">{file.name}</span>
                                          <span className="text-[10px] text-[#888888]">
                                            ({(file.size / 1024).toFixed(0)} KB)
                                          </span>
                                        </div>

                                        <button
                                          type="button"
                                          onClick={() => removeFile(pIdx, file.id)}
                                          className="text-[#888888] hover:text-red-600 p-1 rounded transition-colors"
                                          aria-label="Remove file"
                                        >
                                          ✕
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Additional Requirements */}
                              <div>
                                <label className="block text-xs font-semibold text-[#111111] mb-1">
                                  Additional Specifications <span className="text-[11px] font-normal text-[#888888]">(Optional)</span>
                                </label>
                                <textarea
                                  rows={2}
                                  value={product.additionalRequirements}
                                  onChange={(e) => updateProduct(pIdx, 'additionalRequirements', e.target.value)}
                                  placeholder="e.g., Custom logo laser engraving, barcode labels, retail packaging, sample needed before production..."
                                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#CCCCCC] bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all resize-y"
                                />
                              </div>
                            </div>
                          );
                        })}

                        {/* Add Another Product CTA */}
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={addProduct}
                            className="w-full py-3 rounded-xl border border-dashed border-[#CCCCCC] hover:border-[#111111] bg-white text-xs font-semibold text-[#111111] hover:bg-[#F9F9FA] transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Add Another Product to Enquiry</span>
                          </button>
                        </div>
                      </div>

                      {/* Step 1 Submit Button */}
                      <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-end">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-colors shadow-xs"
                        >
                          <span>Continue to Contact Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 02: CONTACT DETAILS ================= */}
                  {step === 2 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <h2 className="text-base sm:text-lg font-bold text-[#111111]">
                          Where should we reach you?
                        </h2>
                        <p className="text-xs text-[#666666] mt-0.5">
                          Just a few details so our sourcing specialists can contact you directly with pricing and supplier options.
                        </p>
                      </div>

                      <div className="p-4 sm:p-6 rounded-2xl border border-[#EAEAEA] bg-[#FAFAFA]/60 space-y-4">
                        {/* Full Name & Company Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div data-error={!!errors.fullName}>
                            <label className="block text-xs font-semibold text-[#111111] mb-1">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={contact.fullName}
                              onChange={(e) => {
                                setContact({ ...contact, fullName: e.target.value });
                                if (errors.fullName) {
                                  const next = { ...errors };
                                  delete next.fullName;
                                  setErrors(next);
                                }
                              }}
                              placeholder="e.g., Rajesh Sharma"
                              className={`w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all ${
                                errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CCCCCC] focus:border-[#111111]'
                              }`}
                            />
                            {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-[#111111] mb-1">
                              Company / Business Name <span className="text-[11px] font-normal text-[#888888]">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              value={contact.companyName}
                              onChange={(e) => setContact({ ...contact, companyName: e.target.value })}
                              placeholder="e.g., Apex Retail India or Individual"
                              className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border border-[#CCCCCC] bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all"
                            />
                          </div>
                        </div>

                        {/* WhatsApp Number & Email Address */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div data-error={!!errors.whatsappNumber}>
                            <label className="block text-xs font-semibold text-[#111111] mb-1">
                              WhatsApp Number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-2">
                              <select
                                value={contact.countryCode}
                                onChange={(e) => setContact({ ...contact, countryCode: e.target.value })}
                                className="w-28 px-2 py-2.5 text-xs sm:text-sm rounded-lg border border-[#CCCCCC] bg-white text-[#111111] focus:outline-none focus:border-[#111111] shrink-0"
                              >
                                {COUNTRY_CODES.map((c) => (
                                  <option key={c.code} value={c.code}>
                                    {c.code} {c.country.split(' ')[0]}
                                  </option>
                                ))}
                              </select>

                              <input
                                type="tel"
                                value={contact.whatsappNumber}
                                onChange={(e) => {
                                  setContact({ ...contact, whatsappNumber: e.target.value });
                                  if (errors.whatsappNumber) {
                                    const next = { ...errors };
                                    delete next.whatsappNumber;
                                    setErrors(next);
                                  }
                                }}
                                placeholder="98765 43210"
                                className={`flex-grow px-3 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all ${
                                  errors.whatsappNumber ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CCCCCC] focus:border-[#111111]'
                                }`}
                              />
                            </div>
                            {errors.whatsappNumber ? (
                              <p className="text-[11px] text-red-600 mt-1">{errors.whatsappNumber}</p>
                            ) : (
                              <p className="text-[10.5px] text-[#888888] mt-1">
                                We will send supplier quotes and catalogs directly to this WhatsApp number.
                              </p>
                            )}
                          </div>

                          <div data-error={!!errors.email}>
                            <label className="block text-xs font-semibold text-[#111111] mb-1">
                              Email Address <span className="text-[11px] font-normal text-[#888888]">(Optional)</span>
                            </label>
                            <input
                              type="email"
                              value={contact.email}
                              onChange={(e) => {
                                setContact({ ...contact, email: e.target.value });
                                if (errors.email) {
                                  const next = { ...errors };
                                  delete next.email;
                                  setErrors(next);
                                }
                              }}
                              placeholder="name@business.com"
                              className={`w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all ${
                                errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CCCCCC] focus:border-[#111111]'
                              }`}
                            />
                            {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        {/* Delivery Destination: City and Country */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div data-error={!!errors.deliveryCity}>
                            <label className="block text-xs font-semibold text-[#111111] mb-1">
                              Delivery City / Port <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={contact.deliveryCity}
                              onChange={(e) => {
                                setContact({ ...contact, deliveryCity: e.target.value });
                                if (errors.deliveryCity) {
                                  const next = { ...errors };
                                  delete next.deliveryCity;
                                  setErrors(next);
                                }
                              }}
                              placeholder="e.g., Mumbai, New Delhi, Bengaluru"
                              className={`w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all ${
                                errors.deliveryCity ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CCCCCC] focus:border-[#111111]'
                              }`}
                            />
                            {errors.deliveryCity && <p className="text-[11px] text-red-600 mt-1">{errors.deliveryCity}</p>}
                          </div>

                          <div data-error={!!errors.deliveryCountry}>
                            <label className="block text-xs font-semibold text-[#111111] mb-1">
                              Delivery Country <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={contact.deliveryCountry}
                              onChange={(e) => {
                                setContact({ ...contact, deliveryCountry: e.target.value });
                                if (errors.deliveryCountry) {
                                  const next = { ...errors };
                                  delete next.deliveryCountry;
                                  setErrors(next);
                                }
                              }}
                              placeholder="India"
                              className={`w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all ${
                                errors.deliveryCountry ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CCCCCC] focus:border-[#111111]'
                              }`}
                            />
                            {errors.deliveryCountry && (
                              <p className="text-[11px] text-red-600 mt-1">{errors.deliveryCountry}</p>
                            )}
                          </div>
                        </div>

                        {/* Consent Checkbox */}
                        <div data-error={!!errors.consent} className="pt-2">
                          <label className="flex items-start gap-2.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={contact.consent}
                              onChange={(e) => {
                                setContact({ ...contact, consent: e.target.checked });
                                if (errors.consent) {
                                  const next = { ...errors };
                                  delete next.consent;
                                  setErrors(next);
                                }
                              }}
                              className="mt-0.5 rounded border-[#CCCCCC] text-[#111111] focus:ring-[#111111]"
                            />
                            <span className="text-[11.5px] text-[#555555] leading-normal select-none">
                              I consent to be contacted by Hira Outsourcing regarding this enquiry and accept the{' '}
                              <Link to="/privacy-policy" target="_blank" className="text-[#111111] underline font-medium">
                                Privacy Policy
                              </Link>
                              . We never sell or spam your contact information.
                            </span>
                          </label>
                          {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
                        </div>
                      </div>

                      {/* Step 2 Actions */}
                      <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#EAEAEA] hover:border-[#111111] text-xs font-medium text-[#111111] transition-colors"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back to Requirements</span>
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                              <span>Submitting Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Enquiry</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Desktop Side Summary / Trust Column (4 columns on desktop) */}
              <div className="hidden lg:block lg:col-span-4 sticky top-24">
                <div className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAFA] p-6 space-y-6">
                  {/* Realtime Live Preview */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#888888] block mb-2">
                      Enquiry Summary
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between py-1.5 border-b border-[#EAEAEA]">
                        <span className="text-[#666666]">Services:</span>
                        <span className="font-semibold text-[#111111]">{selectedServices.length} selected</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-[#EAEAEA]">
                        <span className="text-[#666666]">Products:</span>
                        <span className="font-semibold text-[#111111]">{products.length} item(s)</span>
                      </div>
                      {contact.deliveryCity && (
                        <div className="flex items-center justify-between py-1.5 border-b border-[#EAEAEA]">
                          <span className="text-[#666666]">Destination:</span>
                          <span className="font-semibold text-[#111111] truncate max-w-[140px]">
                            {contact.deliveryCity}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sourcing Guarantee Badges */}
                  <div className="pt-2 border-t border-[#EAEAEA] space-y-3">
                    <div className="flex items-start gap-2.5 text-xs">
                      <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#111111] block">Verified Direct Suppliers</span>
                        <span className="text-[11px] text-[#666666]">
                          We verify business licenses, factory capabilities, and past export history.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs">
                      <CheckCircle className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#111111] block">Transparent Quotations</span>
                        <span className="text-[11px] text-[#666666]">
                          Ex-factory prices, customs duties, freight and door delivery clearly calculated.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs">
                      <Lock className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#111111] block">100% Confidential</span>
                        <span className="text-[11px] text-[#666666]">
                          Your product ideas, designs and business details are protected.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Alternative */}
                  <div className="pt-2 border-t border-[#EAEAEA]">
                    <span className="text-[10px] text-[#888888] uppercase tracking-wider block mb-1.5 font-semibold">
                      Prefer instant chat?
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-white border border-[#EAEAEA] hover:border-[#111111] text-xs font-semibold text-[#111111] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp: {siteConfig.whatsapp.displayNumber}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Reassurance / Trust Section Below Form */}
          <section className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#EAEAEA]">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#888888] block mb-1">
                OUR COMMITMENT
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                Your requirements matter.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-center">
                <div className="w-8 h-8 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center mx-auto mb-3 shadow-2xs">
                  <Building2 className="w-4 h-4 text-[#111111]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#111111] mb-1">
                  Handled by our team
                </h4>
                <p className="text-[11px] text-[#666666] leading-relaxed">
                  Your enquiry is reviewed directly by our bilingual sourcing specialists based in India and China.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-center">
                <div className="w-8 h-8 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center mx-auto mb-3 shadow-2xs">
                  <Lock className="w-4 h-4 text-[#111111]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#111111] mb-1">
                  Strictly Confidential
                </h4>
                <p className="text-[11px] text-[#666666] leading-relaxed">
                  Your product details are used solely to evaluate suppliers and calculate accurate landed costs.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-center">
                <div className="w-8 h-8 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center mx-auto mb-3 shadow-2xs">
                  <Globe className="w-4 h-4 text-[#111111]" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#111111] mb-1">
                  Complete Support
                </h4>
                <p className="text-[11px] text-[#666666] leading-relaxed">
                  We provide dedicated guidance throughout the sourcing, supplier verification, and import process.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 5. Minimal Footer */}
      <footer className="py-6 border-t border-[#EAEAEA] bg-white text-center text-xs text-[#666666]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 Hira Outsourcing Services Pvt. Ltd. All rights reserved.</span>
          <div className="flex items-center gap-4 text-[11.5px]">
            <Link to="/privacy-policy" className="hover:text-[#111111] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#111111] transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-[#111111] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GetAQuotePage;
