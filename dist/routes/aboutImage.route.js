"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aboutImage_service_1 = require("../services/aboutImage.service");
const aboutImage_controller_1 = require("../controllers/aboutImage.controller");
const upload_middleware_1 = require("../middlewares/upload.middleware"); // aynısını kullanabilirsin
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_service_1 = require("../services/auth.service");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const aboutImage_validator_1 = require("../validators/aboutImage.validator");
const router = (0, express_1.Router)();
const aboutImageService = new aboutImage_service_1.AboutImageService();
const aboutImageController = (0, aboutImage_controller_1.createAboutImageController)(aboutImageService);
const authService = new auth_service_1.AuthService();
router.post('/:aboutId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(aboutImage_validator_1.uploadParamsSchema), upload_middleware_1.uploadAboutImage.single('image'), aboutImageController.upload);
router.get('/:aboutId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(aboutImage_validator_1.uploadParamsSchema), aboutImageController.getByAbout);
router.delete('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(aboutImage_validator_1.deleteParamsSchema), aboutImageController.delete);
exports.default = router;
//# sourceMappingURL=aboutImage.route.js.map