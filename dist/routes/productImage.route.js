"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productImage_service_1 = require("../services/productImage.service");
const productImage_controller_1 = require("../controllers/productImage.controller");
const upload_middleware_1 = require("../middlewares/upload.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_service_1 = require("../services/auth.service");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const productImage_validator_1 = require("../validators/productImage.validator");
const router = (0, express_1.Router)();
const productImageService = new productImage_service_1.ProductImageService();
const productImageController = (0, productImage_controller_1.createProductImageController)(productImageService);
const authService = new auth_service_1.AuthService();
router.post('/:productId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(productImage_validator_1.uploadParamsSchema), // Burada params doğrulaması
upload_middleware_1.uploadProductImage.single('image'), productImageController.upload);
router.get('/:productId', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(productImage_validator_1.uploadParamsSchema), // Burada params doğrulaması
productImageController.getByProduct);
router.delete('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateParams)(productImage_validator_1.deleteParamsSchema), // Burada params doğrulaması
productImageController.delete);
exports.default = router;
//# sourceMappingURL=productImage.route.js.map