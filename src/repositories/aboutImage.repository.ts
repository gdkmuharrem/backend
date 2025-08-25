import { prisma } from '../prismaClient';
import { AboutImage } from '@prisma/client';

export function createAboutImage(data: {
  aboutId: string;
  originalName: string;
  storedName: string;
  filePath: string;
}): Promise<AboutImage> {
  return prisma.aboutImage.create({ data });
}

export function getImagesByAbout(aboutId: string): Promise<AboutImage[]> {
  return prisma.aboutImage.findMany({
    where: { aboutId },
    orderBy: { createdAt: 'desc' },
  });
}

export function getImageById(id: string): Promise<AboutImage | null> {
  return prisma.aboutImage.findUnique({ where: { id } });
}

export async function deleteImage(id: string): Promise<void> {
  await prisma.aboutImage.delete({ where: { id } });
}
