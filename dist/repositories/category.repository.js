"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = createCategory;
exports.getAllCategories = getAllCategories;
exports.getCategoryById = getCategoryById;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
const prismaClient_1 = require("../prismaClient");
// Create
function createCategory(data) {
    const { parentId, isActive, order, ...rest } = data;
    // parent alanını ya tam nesne yap, ya tamamen kaldır (null değil!)
    const parentData = parentId ? { connect: { id: parentId } } : undefined;
    return prismaClient_1.prisma.category.create({
        data: {
            ...rest,
            isActive: isActive === undefined ? true : isActive,
            order: order ?? 0,
            ...(parentData ? { parent: parentData } : {}),
        },
    });
}
// Get all
function getAllCategories() {
    return prismaClient_1.prisma.category.findMany({
        orderBy: { order: 'asc' },
        include: { parent: true, children: true },
    });
}
// Get by id
function getCategoryById(id) {
    return prismaClient_1.prisma.category.findUnique({ where: { id } });
}
// Update
async function updateCategory(id, data) {
    const { parentId, isActive, order, ...rest } = data;
    const updateData = { ...rest };
    if (typeof isActive !== 'undefined')
        updateData.isActive = isActive;
    if (typeof order !== 'undefined')
        updateData.order = order;
    if (parentId === undefined) {
        // parent alanı değişmiyor, updateData'ya ekleme
    }
    else if (parentId === null) {
        updateData.parent = { disconnect: true };
    }
    else {
        updateData.parent = { connect: { id: parentId } };
    }
    return prismaClient_1.prisma.category.update({
        where: { id },
        data: updateData,
    });
}
// Delete
async function deleteCategory(id) {
    await prismaClient_1.prisma.category.delete({ where: { id } });
}
//# sourceMappingURL=category.repository.js.map