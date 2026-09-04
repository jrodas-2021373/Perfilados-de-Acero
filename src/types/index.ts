export type ProductCategory = 
  | 'todos' 
  | 'laminas-mallas' 
  | 'perfiles-barras' 
  | 'tuberia' 
  | 'servicios';

export interface ProductSpec {
  property: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription: string;
  image: string;
  badge?: string;
  standard?: string; // e.g. ASTM A36, ASTM A500
  measures: string[];
  specs: ProductSpec[];
  applications: string[];
  isService?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
  ctaText: string;
}

export interface QuoteItem {
  productId: string;
  productName: string;
  measure: string;
  quantity: number;
  unit: string;
  customNotes?: string;
}
