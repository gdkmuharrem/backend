"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const visionImage_service_1 = require("../services/visionImage.service");
const visionImage_controller_1 = require("../controllers/visionImage.controller");
const upload_middleware_1 = require("../middlewares/upload.middleware"); // aynısını kullanabilirsin
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_service_1 = require("../services/auth.service");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const visionImage_validator_1 = require("../validators/visionImage.validator");
const router = (0, express_1.Router)();
const visionImageService = new visionImage_service_1.VisionImageService();
const visionImageController = (0, visionImage_controller_1.createVisionImageController)(visionImageService);
const authService = new auth_service_1.AuthService();
router.post('/:visionId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(visionImage_validator_1.uploadParamsSchema), upload_middleware_1.uploadVisionImage.single('image'), visionImageController.upload);
router.get('/:visionId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(visionImage_validator_1.uploadParamsSchema), visionImageController.getByVision);
router.delete('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(visionImage_validator_1.deleteParamsSchema), visionImageController.delete);
exports.default = router;
//# sourceMappingURL=visionImage.route.js.map