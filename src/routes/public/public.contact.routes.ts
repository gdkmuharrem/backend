import { Router } from 'express';
import { ContactService } from '../../services/contact.service';
import { createPublicContactController } from '../../controllers/public/public.contact.controller';
import { validateBody } from '../../middlewares/validate.middleware';
import { contactMessageSchema } from '../../validators/contact.validator';

const router = Router();
const contactService = new ContactService();
const controller = createPublicContactController(contactService);

router.post('/', validateBody(contactMessageSchema), controller.create);

export default router;
