"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vision_service_1 = require("../../services/vision.service");
const public_vision_controller_1 = require("../../controllers/public/public.vision.controller");
const router = (0, express_1.Router)();
const visionService = new vision_service_1.VisionService();
const controller = (0, public_vision_controller_1.createPublicVisionController)(visionService);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
exports.default = router;
//# sourceMappingURL=public.vision.routes.js.map