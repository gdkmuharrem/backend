"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroModel_service_1 = require("../services/heroModel.service");
const heroModel_controller_1 = require("../controllers/heroModel.controller");
const upload_middleware_1 = require("../middlewares/upload.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_service_1 = require("../services/auth.service");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const heroModel_validator_1 = require("../validators/heroModel.validator");
const router = (0, express_1.Router)();
const heroModelService = new heroModel_service_1.HeroModelService();
const heroModelController = (0, heroModel_controller_1.createHeroModelController)(heroModelService);
const authService = new auth_service_1.AuthService();
router.post('/:heroId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(heroModel_validator_1.uploadParamsSchema), upload_middleware_1.uploadHeroModelSafe.single('model'), // 3D model için güvenli versiyon
heroModelController.upload);
router.get('/:heroId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(heroModel_validator_1.uploadParamsSchema), heroModelController.getByHero);
router.delete('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(heroModel_validator_1.deleteParamsSchema), heroModelController.delete);
exports.default = router;
//# sourceMappingURL=heroModel.route.js.map