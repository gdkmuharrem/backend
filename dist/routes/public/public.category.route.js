"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_service_1 = require("../../services/category.service");
const public_category_controller_1 = require("../../controllers/public/public.category.controller");
const router = (0, express_1.Router)();
const categoryService = new category_service_1.CategoryService();
const controller = (0, public_category_controller_1.createPublicCategoryController)(categoryService);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
exports.default = router;
//# sourceMappingURL=public.category.route.js.map