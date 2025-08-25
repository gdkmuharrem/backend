"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMision = createMision;
exports.getAllMisions = getAllMisions;
exports.getMisionById = getMisionById;
exports.updateMision = updateMision;
exports.deleteMision = deleteMision;
const prismaClient_1 = require("../prismaClient");
function createMision(data) {
    return prismaClient_1.prisma.mision.create({
        data: {
            title_tr: data.title_tr,
            title_en: data.title_en,
            contents: data.contents,
        },
    });
}
function getAllMisions() {
    return prismaClient_1.prisma.mision.findMany({
        include: { images: true },
        orderBy: { createdAt: 'desc' },
    });
}
function getMisionById(id) {
    return prismaClient_1.prisma.mision.findUnique({
        where: { id },
        include: { images: true },
    });
}
function updateMision(id, data) {
    const updateData = {};
    if (data.title_tr !== undefined)
        updateData.title_tr = data.title_tr;
    if (data.title_en !== undefined)
        updateData.title_en = data.title_en;
    if (data.contents !== undefined)
        updateData.contents = data.contents;
    return prismaClient_1.prisma.mision.update({
        where: { id },
        data: updateData,
    });
}
function deleteMision(id) {
    return prismaClient_1.prisma.mision.delete({ where: { id } }).then(() => { });
}
//# sourceMappingURL=mision.repository.js.map