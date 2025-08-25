import { Admin } from '@prisma/client';
import { IAuthService } from './interfaces/IAuthService';
export declare class AuthService implements IAuthService {
    private readonly saltRounds;
    validateAdmin(email: string, password: string): Promise<Admin | null>;
    registerAdmin(email: string, plainPassword: string): Promise<Admin>;
    generateToken(adminId: string): string;
    verifyToken(token: string): {
        adminId: string;
    } | null;
    getAdminById(id: string): Promise<Admin | null>;
}
//# sourceMappingURL=auth.service.d.ts.map