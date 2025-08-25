import { prisma } from '../prismaClient';
import { VisionImage } from '@prisma/client';

export function createVisionImage(data: {
  visionId: string;
  originalName: string;
  storedName: string;
  filePath: string;
}): Promise<VisionImage> {
  return prisma.visionImage.create({ data });
}

export function getImagesByVision(visionId: string): Promise<VisionImage[]> {
  return prisma.visionImage.findMany({
    where: { visionId },
    orderBy: { createdAt: 'desc' },
  });
}

export function getImageById(id: string): Promise<VisionImage | null> {
  return prisma.visionImage.findUnique({ where: { id } });
}

export async function deleteImage(id: string): Promise<void> {
  await prisma.visionImage.delete({ where: { id } });
}
