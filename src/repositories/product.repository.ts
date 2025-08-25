import { prisma } from '../prismaClient';
import { Product } from '@prisma/client';
import { ProductInput } from '../validators/product.validator';

// CREATE
export function createProduct(data: ProductInput): Promise<Product> {
  return prisma.product.create({
    data: {
      name_tr: data.name_tr,
      name_en: data.name_en,
      price: data.price,
      categoryId: data.categoryId,
      isActive: data.isActive ?? true,
      description_tr: data.description_tr ?? null,
      description_en: data.description_en ?? null,
    },
  });
}

// READ ALL
export function getAllProducts(): Promise<Product[]> {
  return prisma.product.findMany({
    include: {
      category: true,
      images: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}

// READ ONE
export function getProductById(id: string): Promise<Product | null> {
  return prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      images: true,
    },
  });
}

// UPDATE
export function updateProduct(id: string, data: Partial<ProductInput>): Promise<Product> {
  const updateData: any = {};

  if (data.name_tr !== undefined) updateData.name_tr = data.name_tr;
  if (data.name_en !== undefined) updateData.name_en = data.name_en;
  if (data.price !== undefined) updateData.price = data.price;
  if (data.categoryId !== undefined) updateData.categoryId = data.categoryId;
  if (data.isActive !== undefined) updateData.isActive = data.isActive;

  updateData.description_tr = data.description_tr ?? null;
  updateData.description_en = data.description_en ?? null;

  return prisma.product.update({
    where: { id },
    data: updateData,
  });
}

// DELETE
export function deleteProduct(id: string): Promise<void> {
  return prisma.product.delete({ where: { id } }).then(() => {});
}

// GET BY CATEGORY
export function getProductsByCategory(categoryId: string): Promise<Product[]> {
  return prisma.product.findMany({
    where: { categoryId },
    include: { category: true, images: true },
    orderBy: { createdAt: 'desc' },
  });
}

// SEARCH
export function searchProducts(keyword: string): Promise<Product[]> {
  return prisma.product.findMany({
    where: {
      OR: [
        { name_tr: { contains: keyword, mode: 'insensitive' } },
        { name_en: { contains: keyword, mode: 'insensitive' } },
        { description_tr: { contains: keyword, mode: 'insensitive' } },
        { description_en: { contains: keyword, mode: 'insensitive' } },
      ],
    },
    include: { category: true, images: true },
    orderBy: { createdAt: 'desc' },
  });
}

// PAGINATION
export async function paginateProducts(page: number, pageSize: number): Promise<{
  total: number;
  products: Product[];
}> {
  const total = await prisma.product.count();
  const products = await prisma.product.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: { category: true, images: true },
    orderBy: { createdAt: 'desc' },
  });

  return { total, products };
}

// BULK DELETE
export function bulkDeleteProducts(ids: string[]): Promise<void> {
  return prisma.product.deleteMany({
    where: { id: { in: ids } },
  }).then(() => {});
}
