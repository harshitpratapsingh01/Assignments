"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateSchima = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUpdateSchima = joi_1.default.object({
    username: joi_1.default.string().min(3).max(30),
    email: joi_1.default.string().email(),
    id: joi_1.default.number(),
    PhoneNo: joi_1.default.number().min(5000000000).max(9999999999),
    role: joi_1.default.string().min(3).max(50)
});
exports.validateUpdateSchima = validateUpdateSchima;
//# sourceMappingURL=validateUpdates.js.map