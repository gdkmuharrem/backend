"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_service_1 = require("../services/review.service");
const review_controller_1 = require("../controllers/review.controller");
const review_validator_1 = require("../validators/review.validator");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_service_1 = require("../services/auth.service");
const router = (0, express_1.Router)();
const reviewService = new review_service_1.ReviewService();
const reviewController = (0, review_controller_1.createReviewController)(reviewService);
const authService = new auth_service_1.AuthService();
router.post('/', (0, validate_middleware_1.validateBody)(review_validator_1.reviewSchema), reviewController.create);
// Admin-only routes:
router.get('/', (0, auth_middleware_1.adminAuthMiddleware)(authService), reviewController.getAll);
router.get('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), reviewController.getById);
router.delete('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), reviewController.delete);
router.patch('/:id', (0, auth_middleware_1.adminAuthMiddleware)(authService), (0, validate_middleware_1.validateBody)(review_validator_1.approvalSchema), reviewController.approveToggle);
// Yeni: okunma durumu için PATCH /:id/read
router.patch('/:id/read', (0, auth_middleware_1.adminAuthMiddleware)(authService), reviewController.markAsRead);
exports.default = router;
//# sourceMappingURL=review.route.js.map