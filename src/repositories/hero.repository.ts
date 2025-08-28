import { prisma } from '../prismaClient';
import { Hero } from '@prisma/client';
import { HeroInput } from '../validators/hero.validator';

export function createHero(data: HeroInput): Promise<Hero> {
  return prisma.hero.create({
    data: {
      isActive: data.isActive,
    },
  });
}

export function getAllHeroes(): Promise<Hero[]> {
  return prisma.hero.findMany({
    include: { 
      images: true,
      models: true 
    },
    orderBy: { createdAt: 'desc' },
  });
}

export function getHeroById(id: string): Promise<Hero | null> {
  return prisma.hero.findUnique({
    where: { id },
    include: { 
      images: true,
      models: true 
    },
  });
}

export function updateHero(id: string, data: Partial<HeroInput>): Promise<Hero> {
  const updateData: any = {};
  if (data.isActive !== undefined) updateData.isActive = data.isActive;

  return prisma.hero.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteHero(id: string): Promise<void> {
  await prisma.hero.delete({ where: { id } });
}