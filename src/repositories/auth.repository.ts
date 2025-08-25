import { prisma } from '../prismaClient';
import { Admin } from '@prisma/client';

export async function findByEmail(email: string): Promise<Admin | null> {
  return prisma.admin.findUnique({ where: { email } });
}

export async function findById(id: string): Promise<Admin | null> {
  return prisma.admin.findUnique({ where: { id } });
}

export async function createAdmin(email: string, hashedPassword: string): Promise<Admin> {
  return prisma.admin.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
}
