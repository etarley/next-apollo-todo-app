// types.ts
export interface Category {
  categoryID: number;
  name: string;
  description?: string | null;
}

export interface CategoryResponse {
  code: string;
  success: boolean;
  message: string;
  category?: Category | null;
}
