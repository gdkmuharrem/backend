"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_service_1 = require("../services/auth.service");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const auth_validator_1 = require("../validators/auth.validator");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const authService = new auth_service_1.AuthService();
const authController = (0, auth_controller_1.createAuthController)(authService);
router.use((0, cookie_parser_1.default)());
router.post('/register', (0, validate_middleware_1.validateBody)(auth_validator_1.registerSchema), authController.register); // Yeni kayıt endpoint
router.post('/login', (0, validate_middleware_1.validateBody)(auth_validator_1.loginSchema), authController.login);
router.post('/logout', authController.logout);
router.get('/me', (0, auth_middleware_1.adminAuthMiddleware)(authService), authController.getMe);
exports.default = router;
//# sourceMappingURL=auth.route.js.map