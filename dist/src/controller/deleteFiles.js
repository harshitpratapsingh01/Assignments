"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Files = void 0;
const fs_1 = __importDefault(require("fs"));
const delete_Files = (file1, file2, req, res) => {
    fs_1.default.unlink(`./uploads/message${file1}.txt`, (err) => {
        console.log("File deleted");
    });
    fs_1.default.unlink(`./uploads/message${file2}.txt`, (err) => {
        console.log("File deleted");
    });
    res.send("File Deleted successfully !");
};
exports.delete_Files = delete_Files;
//# sourceMappingURL=deleteFiles.js.map