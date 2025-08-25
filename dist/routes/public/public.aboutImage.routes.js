"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aboutImage_service_1 = require("../../services/aboutImage.service");
const public_aboutImage_controller_1 = require("../../controllers/public/public.aboutImage.controller");
const router = (0, express_1.Router)();
const aboutImageService = new aboutImage_service_1.AboutImageService();
const controller = (0, public_aboutImage_controller_1.createPublicAboutImageController)(aboutImageService);
// Public erişim: sadece GET işlemleri
router.get('/about/:aboutId', controller.getByAbout);
router.get('/:id', controller.getById);
exports.default = router;
//# sourceMappingURL=public.aboutImage.routes.js.map