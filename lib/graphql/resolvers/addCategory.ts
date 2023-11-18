import { db } from '@/db';
import { categories } from '@/db/schema/categories';
import { CategoryResponse } from '@/lib/types';

export async function addCategory(
  _: any,
  args: { name: string; description?: string | null },
): Promise<CategoryResponse> {
  try {
    const category = await db.insert(categories).values(args).returning({
      categoryID: categories.categoryID,
      name: categories.name,
      description: categories.description,
    });

    return {
      code: '200',
      success: true,
      message: 'Category successfully added',
      category: category[0],
    };
  } catch (error) {
    console.error('Failed to add category:', error);

    return {
      code: '400',
      success: false,
      message: 'Failed to add category',
      category: null,
    };
  }
}
