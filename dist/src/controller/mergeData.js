"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeData = void 0;
const fs_1 = __importDefault(require("fs"));
const handlefiles_1 = require("../routes/handlefiles");
const MergeData = (file1Path, file2Path, req, res) => {
    fs_1.default.readFile(file1Path, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            fs_1.default.writeFile(handlefiles_1.newfilepath, data, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            fs_1.default.readFile(file2Path, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    fs_1.default.appendFile(handlefiles_1.newfilepath, ` ${data}`, (err) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
                console.log("new file created");
                res.send("new file created");
            });
        }
    });
};
exports.MergeData = MergeData;
//# sourceMappingURL=mergeData.js.map