"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVision = createVision;
exports.getAllVisions = getAllVisions;
exports.getVisionById = getVisionById;
exports.updateVision = updateVision;
exports.deleteVision = deleteVision;
const prismaClient_1 = require("../prismaClient");
function createVision(data) {
    return prismaClient_1.prisma.vision.create({
        data: {
            title_tr: data.title_tr,
            title_en: data.title_en,
            contents: data.contents,
        },
    });
}
function getAllVisions() {
    return prismaClient_1.prisma.vision.findMany({
        include: { images: true },
        orderBy: { createdAt: 'desc' },
    });
}
function getVisionById(id) {
    return prismaClient_1.prisma.vision.findUnique({
        where: { id },
        include: { images: true },
    });
}
function updateVision(id, data) {
    const updateData = {};
    if (data.title_tr !== undefined)
        updateData.title_tr = data.title_tr;
    if (data.title_en !== undefined)
        updateData.title_en = data.title_en;
    if (data.contents !== undefined)
        updateData.contents = data.contents;
    return prismaClient_1.prisma.vision.update({
        where: { id },
        data: updateData,
    });
}
async function deleteVision(id) {
    await prismaClient_1.prisma.vision.delete({ where: { id } });
}
//# sourceMappingURL=vision.repository.js.map