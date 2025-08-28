"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hero_service_1 = require("../../services/hero.service");
const public_hero_controller_1 = require("../../controllers/public/public.hero.controller");
const router = (0, express_1.Router)();
const heroService = new hero_service_1.HeroService();
const heroController = (0, public_hero_controller_1.createPublicHeroController)(heroService);
// Public routes - authentication gerekmez
router.get('/', heroController.getAll);
router.get('/active', heroController.getActive);
router.get('/:id', heroController.getById);
exports.default = router;
//# sourceMappingURL=public.hero.route.js.map