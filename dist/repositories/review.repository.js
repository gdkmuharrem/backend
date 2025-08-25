"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReview = createReview;
exports.getAllReviews = getAllReviews;
exports.getReviewById = getReviewById;
exports.deleteReview = deleteReview;
exports.updateApproval = updateApproval;
exports.markAsRead = markAsRead;
exports.getApprovedReviews = getApprovedReviews;
const prismaClient_1 = require("../prismaClient");
function createReview(data) {
    return prismaClient_1.prisma.review.create({
        data: {
            name: data.name,
            email: data.email,
            content: data.content,
            productId: data.productId ?? null,
        },
    });
}
function getAllReviews() {
    return prismaClient_1.prisma.review.findMany({ orderBy: { createdAt: 'desc' } });
}
function getReviewById(id) {
    return prismaClient_1.prisma.review.findUnique({ where: { id } });
}
async function deleteReview(id) {
    await prismaClient_1.prisma.review.delete({ where: { id } });
}
function updateApproval(id, approved) {
    return prismaClient_1.prisma.review.update({
        where: { id },
        data: { approved },
    });
}
function markAsRead(id) {
    return prismaClient_1.prisma.review.update({
        where: { id },
        data: { isActive: true },
    });
}
function getApprovedReviews(productId) {
    const where = { approved: true };
    if (productId !== undefined) {
        where.productId = productId;
    }
    return prismaClient_1.prisma.review.findMany({
        where,
        orderBy: { createdAt: 'desc' },
    });
}
//# sourceMappingURL=review.repository.js.map