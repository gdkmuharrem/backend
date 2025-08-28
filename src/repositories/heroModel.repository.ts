import { prisma } from '../prismaClient';
import { Hero3DModel } from '@prisma/client';

export function createHeroModel(data: {
  heroId: string;
  originalName: string;
  storedName: string;
  filePath: string;
}): Promise<Hero3DModel> {
  return prisma.hero3DModel.create({ data });
}

export function getModelsByHero(heroId: string): Promise<Hero3DModel[]> {
  return prisma.hero3DModel.findMany({
    where: { heroId },
    orderBy: { createdAt: 'desc' },
  });
}

export function getModelById(id: string): Promise<Hero3DModel | null> {
  return prisma.hero3DModel.findUnique({ where: { id } });
}

export async function deleteModel(id: string): Promise<void> {
  await prisma.hero3DModel.delete({ where: { id } });
}