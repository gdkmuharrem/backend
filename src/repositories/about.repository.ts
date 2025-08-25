import { prisma } from '../prismaClient';
import { About } from '@prisma/client';
import { AboutInput } from '../validators/about.validator';

export function createAbout(data: AboutInput): Promise<About> {
  return prisma.about.create({
    data: {
      title_tr: data.title_tr,
      title_en: data.title_en,
      contents: data.contents,
    },
  });
}

export function getAllAbouts(): Promise<About[]> {
  return prisma.about.findMany({
    include: { images: true },
    orderBy: { createdAt: 'desc' },
  });
}

export function getAboutById(id: string): Promise<About | null> {
  return prisma.about.findUnique({
    where: { id },
    include: { images: true },
  });
}

export function updateAbout(id: string, data: Partial<AboutInput>): Promise<About> {
  const updateData: any = {};
  if (data.title_tr !== undefined) updateData.title_tr = data.title_tr;
  if (data.title_en !== undefined) updateData.title_en = data.title_en;
  if (data.contents !== undefined) updateData.contents = data.contents;

  return prisma.about.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteAbout(id: string): Promise<void> {
  await prisma.about.delete({ where: { id } });
}
