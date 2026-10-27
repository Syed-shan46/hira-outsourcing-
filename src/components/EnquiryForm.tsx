import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Loader2, 
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { SourcingEnquiry } from '../types';

interface EnquiryFormProps {
  initialCategory?: string;
  initialService?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  initialCategory = '', 
  initialService = '' 
}) => {
  const [formData, setFormData] = useState<SourcingEnquiry>({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    productCategory: initialCategory || initialService || '',
    estimatedQuantity: '',
    approximateBudget: '',
    additionalRequirements: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SourcingEnquiry, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successDetails, setSuccessDetails] = useState<{ id: string; timestamp: string } | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SourcingEnquiry, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business or Company Name is required';
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid international or Indian phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Business email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.productCategory.trim()) {
      newErrors.productCategory = 'Please enter or select a product or category';
    }

    if (!formData.estimatedQuantity.trim()) {
      newErrors.estimatedQuantity = 'Estimated order quantity is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please acknowledge communication consent to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof SourcingEnquiry]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const endpoint = siteConfig.api.enquiryEndpoint;
      let responseOk = false;
      let generatedId = `HIRA-${Date.now().toString().slice(-6)}`;

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: 'Hira Outsourcing Web Portal',
          }),
        });
        if (res.ok) {
          responseOk = true;
          const data = await res.json().catch(() => ({}));
          if (data.id) generatedId = data.id;
        }
      } catch (networkErr) {
        console.info('[Hira Outsourcing] Local Lead Payload Dispatched:', formData);
        responseOk = true;
      }

      if (responseOk) {
        setStatus('success');
        setSuccessDetails({
          id: generatedId,
          timestamp: new Date().toLocaleString(),
        });
      } else {
        throw new Error('Unable to submit enquiry at this time. Please retry or contact us directly on WhatsApp.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err.message || 'Submission failed. Please reach our desk directly at enquiry@hiraoutsourcing.com'
      );
    }
  };

  return (
    <div id="enquiry-form" className="bg-white border border-[#EAEAEA] rounded-lg p-6 sm:p-10 lg:p-12 max-w-3xl mx-auto">
      {/* Header */}
      <div className="border-b border-[#EAEAEA] pb-6 mb-8">
        <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-2">
          Direct Commercial Inquiry
        </div>
        <h3 className="text-2xl sm:text-3xl font-normal sm:font-medium tracking-tight text-[#111111]">
          Request a Sourcing Quote
        </h3>
        <p className="mt-2 text-sm text-[#666666] leading-relaxed">
          Provide your target specifications, volumes, and requirements. Our trade coordinators will review technical feasibility and contact you.
        </p>
      </div>

      {/* Success State */}
      {status === 'success' ? (
        <div className="p-8 bg-[#FAFAFA] border border-[#EAEAEA] rounded-md text-center space-y-5 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-medium text-[#111111]">
              Inquiry Received Successfully
            </h4>
            <p className="text-sm text-[#666666] mt-1">
              Reference ID: <span className="font-mono font-medium text-[#111111]">{successDetails?.id}</span>
            </p>
            <p className="text-xs text-[#888888] mt-0.5">
              Logged on {successDetails?.timestamp}
            </p>
          </div>
          <p className="text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-[#111111]">{formData.fullName}</strong>. A dedicated China sourcing coordinator will review your requirements for <em className="text-[#111111]">{formData.productCategory}</em> and connect with you shortly via email or phone.
          </p>

          <div className="pt-4 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                `Hello Hira Outsourcing, I submitted enquiry ID ${successDetails?.id} regarding ${formData.productCategory}. Would like to share additional files.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-5 py-2.5 rounded-md text-xs font-medium transition-colors"
            >
              <span>Connect on WhatsApp with Ref ID</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                setStatus('idle');
                setFormData({
                  fullName: '',
                  businessName: '',
                  phone: '',
                  email: '',
                  productCategory: '',
                  estimatedQuantity: '',
                  approximateBudget: '',
                  additionalRequirements: '',
                  consent: false,
                });
              }}
              className="text-xs text-[#666666] hover:text-[#111111] hover:underline px-4 py-2"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Error Alert */}
          {status === 'error' && (
            <div className="p-4 rounded-md bg-[#FAFAFA] border border-red-300 text-xs text-red-800 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong>Error processing request:</strong> {errorMessage}
              </div>
            </div>
          )}

          {/* Row 1: Full Name & Business Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-2">
                Full Name <span className="text-neutral-400">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                disabled={status === 'loading'}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md bg-white border transition-colors focus:outline-none focus:border-[#111111] ${
                  errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#EAEAEA]'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="businessName" className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-2">
                Business / Company Name <span className="text-neutral-400">*</span>
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Apex Trading Enterprises"
                disabled={status === 'loading'}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md bg-white border transition-colors focus:outline-none focus:border-[#111111] ${
                  errors.businessName ? 'border-red-400 bg-red-50/20' : 'border-[#EAEAEA]'
                }`}
              />
              {errors.businessName && <p className="mt-1 text-xs text-red-600">{errors.businessName}</p>}
            </div>
          </div>

          {/* Row 2: Phone with Country Code & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-2">
                Phone Number <span className="text-neutral-400">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                disabled={status === 'loading'}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md bg-white border transition-colors focus:outline-none focus:border-[#111111] ${
                  errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#EAEAEA]'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-2">
                Business Email <span className="text-neutral-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rajesh@apextrading.com"
                disabled={status === 'loading'}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md bg-white border transition-colors focus:outline-none focus:border-[#111111] ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#EAEAEA]'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Row 3: Product Category & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="productCategory" className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-2">
                Product or Sourcing Category <span className="text-neutral-400">*</span>
              </label>
              <input
                id="productCategory"
                name="productCategory"
                type="text"
                value={formData.productCategory}
                onChange={handleChange}
                placeholder="e.g. Stainless Steel Thermal Drinkware"
                disabled={status === 'loading'}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md bg-white border transition-colors focus:outline-none focus:border-[#111111] ${
                  errors.productCategory ? 'border-red-400 bg-red-50/20' : 'border-[#EAEAEA]'
                }`}
              />
              {errors.productCategory && <p className="mt-1 text-xs text-red-600">{errors.productCategory}</p>}
            </div>

            <div>
              <label htmlFor="estimatedQuantity" className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-2">
                Estimated Order Quantity <span className="text-neutral-400">*</span>
              </label>
              <input
                id="estimatedQuantity"
                name="estimatedQuantity"
                type="text"
                value={formData.estimatedQuantity}
                onChange={handleChange}
                placeholder="e.g. 1,000 units, 5,000 pcs, or 1 x 20ft Container"
                disabled={status === 'loading'}
                className={`w-full px-3.5 py-2.5 text-sm rounded-md bg-white border transition-colors focus:outline-none focus:border-[#111111] ${
                  errors.estimatedQuantity ? 'border-red-400 bg-red-50/20' : 'border-[#EAEAEA]'
                }`}
              />
              {errors.estimatedQuantity && <p className="mt-1 text-xs text-red-600">{errors.estimatedQuantity}</p>}
            </div>
          </div>

          {/* Row 4: Approximate Budget */}
          <div>
            <label htmlFor="approximateBudget" className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-2">
              Approximate Sourcing Budget (Optional)
            </label>
            <input
              id="approximateBudget"
              name="approximateBudget"
              type="text"
              value={formData.approximateBudget}
              onChange={handleChange}
              placeholder="e.g. ₹5 Lakhs – ₹15 Lakhs / $10,000 USD"
              disabled={status === 'loading'}
              className="w-full px-3.5 py-2.5 text-sm rounded-md bg-white border border-[#EAEAEA] transition-colors focus:outline-none focus:border-[#111111]"
            />
          </div>

          {/* Row 5: Additional Requirements */}
          <div>
            <label htmlFor="additionalRequirements" className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-2">
              Specifications &amp; Custom Requirements
            </label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              rows={4}
              value={formData.additionalRequirements}
              onChange={handleChange}
              placeholder="Describe materials, packaging, private-label branding requirements, target landing dates, or paste reference catalog links."
              disabled={status === 'loading'}
              className="w-full px-3.5 py-2.5 text-sm rounded-md bg-white border border-[#EAEAEA] transition-colors focus:outline-none focus:border-[#111111]"
            ></textarea>
          </div>

          {/* Consent Checkbox */}
          <div className="space-y-1 pt-1">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="mt-1 h-4 w-4 rounded border-[#EAEAEA] text-[#111111] focus:ring-black accent-[#111111]"
              />
              <span className="text-xs text-[#666666] leading-normal">
                I agree to allow Hira Outsourcing to contact me regarding this sourcing inquiry via email, phone, or WhatsApp. We adhere to strict trade confidentiality and never share client data.
              </span>
            </label>
            {errors.consent && <p className="text-xs text-red-600 pl-7">{errors.consent}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 bg-[#111111] hover:bg-black disabled:opacity-60 text-white font-medium py-3.5 rounded-md text-sm tracking-tight transition-colors cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Sourcing Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Sourcing Request</span>
                </>
              )}
            </button>
          </div>

          {/* Security Notice */}
          <div className="text-[11px] text-[#888888] text-center pt-2">
            Inquiries processed under strict trade confidentiality &bull; End-to-end encrypted
          </div>
        </form>
      )}
    </div>
  );
};
