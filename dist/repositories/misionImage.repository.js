"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMisionImage = createMisionImage;
exports.getImagesByMision = getImagesByMision;
exports.getImageById = getImageById;
exports.deleteImage = deleteImage;
const prismaClient_1 = require("../prismaClient");
function createMisionImage(data) {
    return prismaClient_1.prisma.misionImage.create({ data });
}
function getImagesByMision(misionId) {
    return prismaClient_1.prisma.misionImage.findMany({
        where: { misionId },
        orderBy: { createdAt: 'desc' },
    });
}
function getImageById(id) {
    return prismaClient_1.prisma.misionImage.findUnique({ where: { id } });
}
async function deleteImage(id) {
    await prismaClient_1.prisma.misionImage.delete({ where: { id } });
}
//# sourceMappingURL=misionImage.repository.js.map