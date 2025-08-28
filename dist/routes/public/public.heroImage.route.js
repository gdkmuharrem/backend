"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroImage_service_1 = require("../../services/heroImage.service");
const public_heroImage_controller_1 = require("../../controllers/public/public.heroImage.controller");
const router = (0, express_1.Router)();
const heroImageService = new heroImage_service_1.HeroImageService();
const heroImageController = (0, public_heroImage_controller_1.createPublicHeroImageController)(heroImageService);
// Public routes - authentication gerekmez
router.get('/:heroId', heroImageController.getByHero);
router.get('/image/:id', heroImageController.getById);
exports.default = router;
//# sourceMappingURL=public.heroImage.route.js.map