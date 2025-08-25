"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAboutImage = createAboutImage;
exports.getImagesByAbout = getImagesByAbout;
exports.getImageById = getImageById;
exports.deleteImage = deleteImage;
const prismaClient_1 = require("../prismaClient");
function createAboutImage(data) {
    return prismaClient_1.prisma.aboutImage.create({ data });
}
function getImagesByAbout(aboutId) {
    return prismaClient_1.prisma.aboutImage.findMany({
        where: { aboutId },
        orderBy: { createdAt: 'desc' },
    });
}
function getImageById(id) {
    return prismaClient_1.prisma.aboutImage.findUnique({ where: { id } });
}
async function deleteImage(id) {
    await prismaClient_1.prisma.aboutImage.delete({ where: { id } });
}
//# sourceMappingURL=aboutImage.repository.js.map