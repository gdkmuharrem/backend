"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_service_1 = require("../../services/review.service");
const public_review_controller_1 = require("../../controllers/public/public.review.controller");
const review_validator_1 = require("../../validators/review.validator");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const router = (0, express_1.Router)();
const reviewService = new review_service_1.ReviewService();
const reviewController = (0, public_review_controller_1.createPublicReviewController)(reviewService);
// Frontend create
router.post('/', (0, validate_middleware_1.validateBody)(review_validator_1.reviewSchema), reviewController.create);
// Frontend public fetch
router.get('/', reviewController.getAll);
exports.default = router;
//# sourceMappingURL=public.review.route.js.map