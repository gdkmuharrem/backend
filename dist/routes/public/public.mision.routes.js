"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mision_service_1 = require("../../services/mision.service");
const public_mision_controller_1 = require("../../controllers/public/public.mision.controller");
const router = (0, express_1.Router)();
const misionService = new mision_service_1.MisionService();
const controller = (0, public_mision_controller_1.createPublicMisionController)(misionService);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
exports.default = router;
//# sourceMappingURL=public.mision.routes.js.map