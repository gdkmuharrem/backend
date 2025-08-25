import { Router } from 'express';
import { ContactService } from '../services/contact.service';
import { createContactController } from '../controllers/contact.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { contactMessageSchema } from '../validators/contact.validator';
import { adminAuthMiddleware } from '../middlewares/auth.middleware';
import { AuthService } from '../services/auth.service';

const router = Router();
const contactService = new ContactService();
const contactController = createContactController(contactService);
const authService = new AuthService();

router.post('/', validateBody(contactMessageSchema), contactController.create);
router.get('/', adminAuthMiddleware(authService), contactController.getAll);
router.get('/:id', adminAuthMiddleware(authService), contactController.getById);
router.delete('/:id', adminAuthMiddleware(authService), contactController.delete);
router.patch('/:id/read', adminAuthMiddleware(authService), contactController.markAsRead);



export default router;
