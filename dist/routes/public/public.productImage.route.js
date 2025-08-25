"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productImage_service_1 = require("../../services/productImage.service");
const public_productImage_controller_1 = require("../../controllers/public/public.productImage.controller");
const router = (0, express_1.Router)();
const productImageService = new productImage_service_1.ProductImageService();
const controller = (0, public_productImage_controller_1.createPublicProductImageController)(productImageService);
router.get('/:productId', controller.getByProduct);
exports.default = router;
//# sourceMappingURL=public.productImage.route.js.map