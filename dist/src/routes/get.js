"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const displayData_1 = require("../controller/displayData");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    (0, displayData_1.displayAllData)(req, res);
});
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    (0, displayData_1.displayUserData)(id, req, res);
});
exports.default = router;
//# sourceMappingURL=get.js.map