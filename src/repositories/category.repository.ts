import { prisma } from '../prismaClient';
import { Category } from '@prisma/client';
import { CategoryInput } from '../validators/category.validator';

// Create
export function createCategory(data: CategoryInput): Promise<Category> {
  const { parentId, isActive, order, ...rest } = data;

  // parent alanını ya tam nesne yap, ya tamamen kaldır (null değil!)
  const parentData = parentId ? { connect: { id: parentId } } : undefined;

  return prisma.category.create({
    data: {
      ...rest,
      isActive: isActive === undefined ? true : isActive,
      order: order ?? 0,
      ...(parentData ? { parent: parentData } : {}),
    },
  });
}

// Get all
export function getAllCategories(): Promise<Category[]> {
  return prisma.category.findMany({
    orderBy: { order: 'asc' },
    include: { parent: true, children: true },
  });
}

// Get by id
export function getCategoryById(id: string): Promise<Category | null> {
  return prisma.category.findUnique({ where: { id } });
}

// Update
export async function updateCategory(id: string, data: Partial<CategoryInput>): Promise<Category> {
  const { parentId, isActive, order, ...rest } = data;

  const updateData: any = { ...rest };

  if (typeof isActive !== 'undefined') updateData.isActive = isActive;
  if (typeof order !== 'undefined') updateData.order = order;

  if (parentId === undefined) {
    // parent alanı değişmiyor, updateData'ya ekleme
  } else if (parentId === null) {
    updateData.parent = { disconnect: true };
  } else {
    updateData.parent = { connect: { id: parentId } };
  }

  return prisma.category.update({
    where: { id },
    data: updateData,
  });
}

// Delete
export async function deleteCategory(id: string): Promise<void> {
  await prisma.category.delete({ where: { id } });
}
