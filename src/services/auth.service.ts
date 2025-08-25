import bcrypt from 'bcrypt';
import { Admin } from '@prisma/client';
import { IAuthService } from './interfaces/IAuthService';
import { findByEmail, findById, createAdmin } from '../repositories/auth.repository';
import { signToken, verifyToken } from '../utils/jwt.util';

export class AuthService implements IAuthService {
  private readonly saltRounds = 10;

  async validateAdmin(email: string, password: string): Promise<Admin | null> {
    const admin = await findByEmail(email);
    if (!admin) return null;

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) return null;

    return admin;
  }

  async registerAdmin(email: string, plainPassword: string): Promise<Admin> {
    const existing = await findByEmail(email);
    if (existing) {
      throw new Error('Email zaten kullanılıyor');
    }

    const hashedPassword = await bcrypt.hash(plainPassword, this.saltRounds);
    return createAdmin(email, hashedPassword);
  }

  generateToken(adminId: string): string {
    return signToken({ adminId });
  }

  verifyToken(token: string): { adminId: string } | null {
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') return null;
    return decoded as { adminId: string };
  }

  async getAdminById(id: string): Promise<Admin | null> {
    return findById(id);
  }
}
