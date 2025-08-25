"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductImage = createProductImage;
exports.getImagesByProduct = getImagesByProduct;
exports.getImageById = getImageById;
exports.deleteImage = deleteImage;
const prismaClient_1 = require("../prismaClient");
function createProductImage(data) {
    return prismaClient_1.prisma.productImage.create({ data });
}
function getImagesByProduct(productId) {
    return prismaClient_1.prisma.productImage.findMany({
        where: { productId },
        orderBy: { createdAt: 'desc' },
    });
}
function getImageById(id) {
    return prismaClient_1.prisma.productImage.findUnique({ where: { id } });
}
async function deleteImage(id) {
    await prismaClient_1.prisma.productImage.delete({ where: { id } });
}
//# sourceMappingURL=productImage.repository.js.map