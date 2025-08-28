"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHero = createHero;
exports.getAllHeroes = getAllHeroes;
exports.getHeroById = getHeroById;
exports.updateHero = updateHero;
exports.deleteHero = deleteHero;
const prismaClient_1 = require("../prismaClient");
function createHero(data) {
    return prismaClient_1.prisma.hero.create({
        data: {
            isActive: data.isActive,
        },
    });
}
function getAllHeroes() {
    return prismaClient_1.prisma.hero.findMany({
        include: {
            images: true,
            models: true
        },
        orderBy: { createdAt: 'desc' },
    });
}
function getHeroById(id) {
    return prismaClient_1.prisma.hero.findUnique({
        where: { id },
        include: {
            images: true,
            models: true
        },
    });
}
function updateHero(id, data) {
    const updateData = {};
    if (data.isActive !== undefined)
        updateData.isActive = data.isActive;
    return prismaClient_1.prisma.hero.update({
        where: { id },
        data: updateData,
    });
}
async function deleteHero(id) {
    await prismaClient_1.prisma.hero.delete({ where: { id } });
}
//# sourceMappingURL=hero.repository.js.map