import { prisma } from '../prismaClient';
import { HeroImage } from '@prisma/client';

export function createHeroImage(data: {
  heroId: string;
  originalName: string;
  storedName: string;
  filePath: string;
}): Promise<HeroImage> {
  return prisma.heroImage.create({ data });
}

export function getImagesByHero(heroId: string): Promise<HeroImage[]> {
  return prisma.heroImage.findMany({
    where: { heroId },
    orderBy: { createdAt: 'desc' },
  });
}

export function getImageById(id: string): Promise<HeroImage | null> {
  return prisma.heroImage.findUnique({ where: { id } });
}

export async function deleteImage(id: string): Promise<void> {
  await prisma.heroImage.delete({ where: { id } });
}