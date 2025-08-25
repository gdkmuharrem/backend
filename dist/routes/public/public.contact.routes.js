"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_service_1 = require("../../services/contact.service");
const public_contact_controller_1 = require("../../controllers/public/public.contact.controller");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const contact_validator_1 = require("../../validators/contact.validator");
const router = (0, express_1.Router)();
const contactService = new contact_service_1.ContactService();
const controller = (0, public_contact_controller_1.createPublicContactController)(contactService);
router.post('/', (0, validate_middleware_1.validateBody)(contact_validator_1.contactMessageSchema), controller.create);
exports.default = router;
//# sourceMappingURL=public.contact.routes.js.map