"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAbout = createAbout;
exports.getAllAbouts = getAllAbouts;
exports.getAboutById = getAboutById;
exports.updateAbout = updateAbout;
exports.deleteAbout = deleteAbout;
const prismaClient_1 = require("../prismaClient");
function createAbout(data) {
    return prismaClient_1.prisma.about.create({
        data: {
            title_tr: data.title_tr,
            title_en: data.title_en,
            contents: data.contents,
        },
    });
}
function getAllAbouts() {
    return prismaClient_1.prisma.about.findMany({
        include: { images: true },
        orderBy: { createdAt: 'desc' },
    });
}
function getAboutById(id) {
    return prismaClient_1.prisma.about.findUnique({
        where: { id },
        include: { images: true },
    });
}
function updateAbout(id, data) {
    const updateData = {};
    if (data.title_tr !== undefined)
        updateData.title_tr = data.title_tr;
    if (data.title_en !== undefined)
        updateData.title_en = data.title_en;
    if (data.contents !== undefined)
        updateData.contents = data.contents;
    return prismaClient_1.prisma.about.update({
        where: { id },
        data: updateData,
    });
}
async function deleteAbout(id) {
    await prismaClient_1.prisma.about.delete({ where: { id } });
}
//# sourceMappingURL=about.repository.js.map