"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const misionImage_service_1 = require("../../services/misionImage.service");
const public_misionImage_controller_1 = require("../../controllers/public/public.misionImage.controller");
const router = (0, express_1.Router)();
const misionImageService = new misionImage_service_1.MisionImageService();
const controller = (0, public_misionImage_controller_1.createPublicMisionImageController)(misionImageService);
// Public erişim: sadece GET işlemleri
router.get('/mision/:misionId', controller.getByMision);
router.get('/:id', controller.getById);
exports.default = router;
//# sourceMappingURL=public.misionImage.routes.js.map