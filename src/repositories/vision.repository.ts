import { prisma } from '../prismaClient';
import { Vision } from '@prisma/client';
import { VisionInput } from '../validators/vision.validator';

export function createVision(data: VisionInput): Promise<Vision> {
  return prisma.vision.create({
    data: {
      title_tr: data.title_tr,
      title_en: data.title_en,
      contents: data.contents,
    },
  });
}

export function getAllVisions(): Promise<Vision[]> {
  return prisma.vision.findMany({
    include: { images: true },
    orderBy: { createdAt: 'desc' },
  });
}

export function getVisionById(id: string): Promise<Vision | null> {
  return prisma.vision.findUnique({
    where: { id },
    include: { images: true },
  });
}

export function updateVision(id: string, data: Partial<VisionInput>): Promise<Vision> {
  const updateData: any = {};

  if (data.title_tr !== undefined) updateData.title_tr = data.title_tr;
  if (data.title_en !== undefined) updateData.title_en = data.title_en;
  if (data.contents !== undefined) updateData.contents = data.contents;

  return prisma.vision.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteVision(id: string): Promise<void> {
  await prisma.vision.delete({ where: { id } });
}
