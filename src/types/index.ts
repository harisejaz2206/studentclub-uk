export interface Resource {
  id: string;
  name: string;
  description: string;
  category: Category;
  logo: string;
  url: string;
  studentDiscount?: string;
  features: string[];
  rating: number;
}

export type Category = 'transport' | 'banking' | 'groceries' | 'mobile' | 'housing';

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}