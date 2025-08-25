"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const visionImage_service_1 = require("../../services/visionImage.service");
const public_visionImage_controller_1 = require("../../controllers/public/public.visionImage.controller");
const router = (0, express_1.Router)();
const visionImageService = new visionImage_service_1.VisionImageService();
const controller = (0, public_visionImage_controller_1.createPublicVisionImageController)(visionImageService);
// Public erişim: sadece GET işlemleri
router.get('/vision/:visionId', controller.getByVision);
router.get('/:id', controller.getById);
exports.default = router;
//# sourceMappingURL=public.visionImage.routes.js.map