"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_service_1 = require("../../services/product.service");
const public_product_controller_1 = require("../../controllers/public/public.product.controller");
const router = (0, express_1.Router)();
const productService = new product_service_1.ProductService();
const controller = (0, public_product_controller_1.createPublicProductController)(productService);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/category/:categoryId', controller.getByCategory);
router.get('/search', controller.search);
router.get('/paginate', controller.paginate);
exports.default = router;
//# sourceMappingURL=public.product.route.js.map