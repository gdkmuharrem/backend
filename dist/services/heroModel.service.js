"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroModelService = void 0;
const repo = __importStar(require("../repositories/heroModel.repository"));
const path_1 = __importDefault(require("path"));
class HeroModelService {
    async uploadHeroModel(heroId, file) {
        const relativePath = path_1.default.relative(process.cwd(), file.path).replace(/\\/g, '/');
        return repo.createHeroModel({
            heroId,
            originalName: file.originalname,
            storedName: file.filename,
            filePath: relativePath,
        });
    }
    getModelsByHero(heroId) {
        return repo.getModelsByHero(heroId);
    }
    getModelById(id) {
        return repo.getModelById(id);
    }
    deleteModel(id) {
        return repo.deleteModel(id);
    }
}
exports.HeroModelService = HeroModelService;
//# sourceMappingURL=heroModel.service.js.map