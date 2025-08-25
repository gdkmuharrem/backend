import { Router } from 'express';
import { NotificationService } from '../services/notification.service';
import { createNotificationController } from '../controllers/notification.controller';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';
import { validateBody } from '../middlewares/validate.middleware';
import { notificationCreateSchema } from '../validators/notification.validator';

const router = Router();
const notificationService = new NotificationService();
const notificationController = createNotificationController(notificationService);
const authService = new AuthService();

router.use(adminAuthMiddleware(authService));

router.post(
  '/',
  validateBody(notificationCreateSchema),
  notificationController.create
);

router.get('/', notificationController.getAll);
router.get('/count', notificationController.countUnread);
router.patch('/:id/read', notificationController.markAsRead);
router.delete('/:id', notificationController.delete);

export default router;
