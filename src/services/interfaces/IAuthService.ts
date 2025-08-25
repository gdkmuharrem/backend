import { Admin } from '@prisma/client';

export interface IAuthService {
  validateAdmin(email: string, password: string): Promise<Admin | null>;
  generateToken(adminId: string): string;
  verifyToken(token: string): { adminId: string } | null;
  getAdminById(id: string): Promise<Admin | null>;
  registerAdmin(email: string, plainPassword: string): Promise<Admin>;
}
