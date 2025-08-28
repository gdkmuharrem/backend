"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroImage_service_1 = require("../services/heroImage.service");
const heroImage_controller_1 = require("../controllers/heroImage.controller");
const upload_middleware_1 = require("../middlewares/upload.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_service_1 = require("../services/auth.service");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const heroImage_validator_1 = require("../validators/heroImage.validator");
const router = (0, express_1.Router)();
const heroImageService = new heroImage_service_1.HeroImageService();
const heroImageController = (0, heroImage_controller_1.createHeroImageController)(heroImageService);
const authService = new auth_service_1.AuthService();
router.post('/:heroId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(heroImage_validator_1.uploadParamsSchema), upload_middleware_1.uploadHeroImage.single('image'), heroImageController.upload);
router.get('/:heroId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(heroImage_validator_1.uploadParamsSchema), heroImageController.getByHero);
router.delete('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(heroImage_validator_1.deleteParamsSchema), heroImageController.delete);
exports.default = router;
//# sourceMappingURL=heroImage.route.js.map