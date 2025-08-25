import { Admin } from '@prisma/client';
export declare function findByEmail(email: string): Promise<Admin | null>;
export declare function findById(id: string): Promise<Admin | null>;
export declare function createAdmin(email: string, hashedPassword: string): Promise<Admin>;
//# sourceMappingURL=auth.repository.d.ts.map