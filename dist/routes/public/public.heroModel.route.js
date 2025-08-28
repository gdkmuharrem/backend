"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroModel_service_1 = require("../../services/heroModel.service");
const public_heroModel_controller_1 = require("../../controllers/public/public.heroModel.controller");
const router = (0, express_1.Router)();
const heroModelService = new heroModel_service_1.HeroModelService();
const heroModelController = (0, public_heroModel_controller_1.createPublicHeroModelController)(heroModelService);
// Public routes - authentication gerekmez
router.get('/:heroId', heroModelController.getByHero);
router.get('/model/:id', heroModelController.getById);
exports.default = router;
//# sourceMappingURL=public.heroModel.route.js.map