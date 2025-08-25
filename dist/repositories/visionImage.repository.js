"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVisionImage = createVisionImage;
exports.getImagesByVision = getImagesByVision;
exports.getImageById = getImageById;
exports.deleteImage = deleteImage;
const prismaClient_1 = require("../prismaClient");
function createVisionImage(data) {
    return prismaClient_1.prisma.visionImage.create({ data });
}
function getImagesByVision(visionId) {
    return prismaClient_1.prisma.visionImage.findMany({
        where: { visionId },
        orderBy: { createdAt: 'desc' },
    });
}
function getImageById(id) {
    return prismaClient_1.prisma.visionImage.findUnique({ where: { id } });
}
async function deleteImage(id) {
    await prismaClient_1.prisma.visionImage.delete({ where: { id } });
}
//# sourceMappingURL=visionImage.repository.js.map