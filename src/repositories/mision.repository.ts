import { prisma } from '../prismaClient';
import { Mision } from '@prisma/client';
import { MisionInput } from '../validators/mision.validator';

export function createMision(data: MisionInput): Promise<Mision> {
  return prisma.mision.create({
    data: {
      title_tr: data.title_tr,
      title_en: data.title_en,
      contents: data.contents,
    },
  });
}

export function getAllMisions(): Promise<Mision[]> {
  return prisma.mision.findMany({
    include: { images: true },
    orderBy: { createdAt: 'desc' },
  });
}

export function getMisionById(id: string): Promise<Mision | null> {
  return prisma.mision.findUnique({
    where: { id },
    include: { images: true },
  });
}

export function updateMision(id: string, data: Partial<MisionInput>): Promise<Mision> {
  const updateData: any = {};

  if (data.title_tr !== undefined) updateData.title_tr = data.title_tr;
  if (data.title_en !== undefined) updateData.title_en = data.title_en;
  if (data.contents !== undefined) updateData.contents = data.contents;

  return prisma.mision.update({
    where: { id },
    data: updateData,
  });
}

export function deleteMision(id: string): Promise<void> {
  return prisma.mision.delete({ where: { id } }).then(() => {});
}
