"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergedData = void 0;
const fs_1 = __importDefault(require("fs"));
const handlefiles_1 = require("../routes/handlefiles");
const MergedData = (req, res) => {
    fs_1.default.readFile(handlefiles_1.newfilepath, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
};
exports.MergedData = MergedData;
//# sourceMappingURL=displayData.js.map