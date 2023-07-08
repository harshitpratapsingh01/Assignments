"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchRouter = void 0;
const express_1 = __importDefault(require("express"));
const patchlogic_1 = require("../controller/patchlogic");
const router = express_1.default.Router();
exports.patchRouter = router;
router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const update_data = req.body;
    (0, patchlogic_1.changeUserData)(update_data, id, req, res);
});
//# sourceMappingURL=patch.js.map