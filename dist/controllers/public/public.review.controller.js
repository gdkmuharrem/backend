"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPublicReviewController = createPublicReviewController;
function createPublicReviewController(reviewService) {
    return {
        create: async (req, res) => {
            try {
                const review = await reviewService.createReview(req.body);
                res.status(201).json(review);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Yorum kaydedilemedi' });
            }
        },
        getAll: async (req, res) => {
            try {
                const { productId } = req.query;
                const reviews = await reviewService.getPublicReviews(productId);
                res.json(reviews);
            }
            catch (error) {
                res.status(500).json({ message: error.message || 'Yorumlar alınamadı' });
            }
        },
    };
}
//# sourceMappingURL=public.review.controller.js.map