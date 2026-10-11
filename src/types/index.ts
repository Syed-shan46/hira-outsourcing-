export interface SourcingEnquiry {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  productCategory: string;
  estimatedQuantity: string;
  approximateBudget: string;
  additionalRequirements: string;
  consent: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  scopeNote?: string;
  iconName: string;
}

export interface ProductCategoryItem {
  id: string;
  title: string;
  description: string;
  typicalItems: string[];
  imageUrl: string;
  tag: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
