import { prisma } from '../prismaClient';
import { ProductImage } from '@prisma/client';

export function createProductImage(data: {
  productId: string;
  originalName: string;
  storedName: string;
  filePath: string;
}): Promise<ProductImage> {
  return prisma.productImage.create({ data });
}

export function getImagesByProduct(productId: string): Promise<ProductImage[]> {
  return prisma.productImage.findMany({
    where: { productId },
    orderBy: { createdAt: 'desc' },
  });
}

export function getImageById(id: string): Promise<ProductImage | null> {
  return prisma.productImage.findUnique({ where: { id } });
}

export async function deleteImage(id: string): Promise<void> {
  await prisma.productImage.delete({ where: { id } });
}
