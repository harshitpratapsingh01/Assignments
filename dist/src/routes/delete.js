"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const express_1 = __importDefault(require("express"));
const deleteA_User_1 = require("../controller/deleteA_User");
const router = express_1.default.Router();
exports.deleteUser = router;
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    (0, deleteA_User_1.deleteUserData)(id, req, res);
});
//# sourceMappingURL=delete.js.map