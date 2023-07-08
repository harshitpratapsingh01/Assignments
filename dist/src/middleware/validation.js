"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchima = void 0;
const joi_1 = __importDefault(require("joi"));
const validateSchima = joi_1.default.object({
    username: joi_1.default.string().min(3).max(30).required(),
    email: joi_1.default.string().email().required(),
    id: joi_1.default.number().required(),
    PhoneNo: joi_1.default.number().min(5000000000).max(9999999999).required(),
    role: joi_1.default.string().min(3).max(50)
});
exports.validateSchima = validateSchima;
//# sourceMappingURL=validation.js.map