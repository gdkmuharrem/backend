"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const about_service_1 = require("../../services/about.service");
const public_about_controller_1 = require("../../controllers/public/public.about.controller");
const router = (0, express_1.Router)();
const aboutService = new about_service_1.AboutService();
const controller = (0, public_about_controller_1.createPublicAboutController)(aboutService);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
exports.default = router;
//# sourceMappingURL=public.about.routes.js.map