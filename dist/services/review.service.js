"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const reviewRepo = __importStar(require("../repositories/review.repository"));
const notification_service_1 = require("./notification.service");
class ReviewService {
    constructor() {
        this.notificationService = new notification_service_1.NotificationService();
    }
    async createReview(data) {
        const review = await reviewRepo.createReview(data);
        const now = new Date().toLocaleString('tr-TR');
        const shortContent = data.content.length > 100 ? data.content.slice(0, 100) + '...' : data.content;
        const title = `${data.name} (${data.email})`;
        const body = `Tarih: ${now}\nYorum: ${shortContent}`;
        await this.notificationService.createNotification({
            type: 'review',
            title,
            body,
            relatedId: review.id,
        });
        return review;
    }
    getAllReviews() {
        return reviewRepo.getAllReviews();
    }
    getReviewById(id) {
        return reviewRepo.getReviewById(id);
    }
    async deleteReview(id) {
        await reviewRepo.deleteReview(id);
        await this.notificationService.deleteNotificationByRelatedId(id);
    }
    async updateApproval(id, approved) {
        const review = await reviewRepo.updateApproval(id, approved);
        if (approved) {
            await this.notificationService.markAsReadByRelatedId(id);
        }
        return review;
    }
    async markAsRead(id) {
        const review = await reviewRepo.markAsRead(id);
        if (review) {
            await this.notificationService.markAsReadByRelatedId(id);
        }
        return review;
    }
    getPublicReviews(productId) {
        return reviewRepo.getApprovedReviews(productId);
    }
}
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map