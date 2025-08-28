"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeroModel = createHeroModel;
exports.getModelsByHero = getModelsByHero;
exports.getModelById = getModelById;
exports.deleteModel = deleteModel;
const prismaClient_1 = require("../prismaClient");
function createHeroModel(data) {
    return prismaClient_1.prisma.hero3DModel.create({ data });
}
function getModelsByHero(heroId) {
    return prismaClient_1.prisma.hero3DModel.findMany({
        where: { heroId },
        orderBy: { createdAt: 'desc' },
    });
}
function getModelById(id) {
    return prismaClient_1.prisma.hero3DModel.findUnique({ where: { id } });
}
async function deleteModel(id) {
    await prismaClient_1.prisma.hero3DModel.delete({ where: { id } });
}
//# sourceMappingURL=heroModel.repository.js.map