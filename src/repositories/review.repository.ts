import { prisma } from '../prismaClient';
import { ReviewInput } from '../validators/review.validator';
import { Review } from '@prisma/client';

export function createReview(data: ReviewInput): Promise<Review> {
  return prisma.review.create({
    data: {
      name: data.name,
      email: data.email,
      content: data.content,
      productId: data.productId ?? null,
    },
  });
}

export function getAllReviews(): Promise<Review[]> {
  return prisma.review.findMany({ orderBy: { createdAt: 'desc' } });
}

export function getReviewById(id: string): Promise<Review | null> {
  return prisma.review.findUnique({ where: { id } });
}

export async function deleteReview(id: string): Promise<void> {
  await prisma.review.delete({ where: { id } });
}

export function updateApproval(id: string, approved: boolean): Promise<Review> {
  return prisma.review.update({
    where: { id },
    data: { approved },
  });
}

export function markAsRead(id: string): Promise<Review> {
  return prisma.review.update({
    where: { id },
    data: { isActive: true },
  });
}

export function getApprovedReviews(productId?: string): Promise<Review[]> {
  const where: any = { approved: true };

  if (productId !== undefined) {
    where.productId = productId;
  }

  return prisma.review.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
}