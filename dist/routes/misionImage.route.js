"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const misionImage_service_1 = require("../services/misionImage.service");
const misionImage_controller_1 = require("../controllers/misionImage.controller");
const upload_middleware_1 = require("../middlewares/upload.middleware"); // aynısını kullanabilirsin
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_service_1 = require("../services/auth.service");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const misionImage_validator_1 = require("../validators/misionImage.validator");
const router = (0, express_1.Router)();
const misionImageService = new misionImage_service_1.MisionImageService();
const misionImageController = (0, misionImage_controller_1.createMisionImageController)(misionImageService);
const authService = new auth_service_1.AuthService();
router.post('/:misionId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(misionImage_validator_1.uploadParamsSchema), upload_middleware_1.uploadMisionImage.single('image'), misionImageController.upload);
router.get('/:misionId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(misionImage_validator_1.uploadParamsSchema), misionImageController.getByMision);
router.delete('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(misionImage_validator_1.deleteParamsSchema), misionImageController.delete);
exports.default = router;
//# sourceMappingURL=misionImage.route.js.map