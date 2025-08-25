import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Geçerli bir email zorunludur'),
  password: z.string().min(6, 'Parola en az 6 karakter olmalıdır'),
});

export const registerSchema = loginSchema; // Kayıt için aynı doğrulama yeterli
