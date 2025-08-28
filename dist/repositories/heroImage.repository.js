"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeroImage = createHeroImage;
exports.getImagesByHero = getImagesByHero;
exports.getImageById = getImageById;
exports.deleteImage = deleteImage;
const prismaClient_1 = require("../prismaClient");
function createHeroImage(data) {
    return prismaClient_1.prisma.heroImage.create({ data });
}
function getImagesByHero(heroId) {
    return prismaClient_1.prisma.heroImage.findMany({
        where: { heroId },
        orderBy: { createdAt: 'desc' },
    });
}
function getImageById(id) {
    return prismaClient_1.prisma.heroImage.findUnique({ where: { id } });
}
async function deleteImage(id) {
    await prismaClient_1.prisma.heroImage.delete({ where: { id } });
}
//# sourceMappingURL=heroImage.repository.js.map