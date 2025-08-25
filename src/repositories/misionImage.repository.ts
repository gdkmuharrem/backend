import { prisma } from '../prismaClient';
import { MisionImage } from '@prisma/client';

export function createMisionImage(data: {
  misionId: string;
  originalName: string;
  storedName: string;
  filePath: string;
}): Promise<MisionImage> {
  return prisma.misionImage.create({ data });
}

export function getImagesByMision(misionId: string): Promise<MisionImage[]> {
  return prisma.misionImage.findMany({
    where: { misionId },
    orderBy: { createdAt: 'desc' },
  });
}

export function getImageById(id: string): Promise<MisionImage | null> {
  return prisma.misionImage.findUnique({ where: { id } });
}

export async function deleteImage(id: string): Promise<void> {
  await prisma.misionImage.delete({ where: { id } });
}
