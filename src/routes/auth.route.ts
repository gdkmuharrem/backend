import { Router } from 'express';
import { createAuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { validateBody } from '../middlewares/validate.middleware';
import { loginSchema, registerSchema } from '../validators/auth.validator';
import cookieParser from 'cookie-parser';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const authService = new AuthService();
const authController = createAuthController(authService);

router.use(cookieParser());

router.post('/register', validateBody(registerSchema), authController.register); // Yeni kayıt endpoint
router.post('/login', validateBody(loginSchema), authController.login);
router.post('/logout', authController.logout);
router.get('/me', adminAuthMiddleware(authService), authController.getMe);

export default router;
