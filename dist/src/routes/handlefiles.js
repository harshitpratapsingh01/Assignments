"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newfilepath = void 0;
const express_1 = __importDefault(require("express"));
const uploadFiles_1 = require("../controller/uploadFiles");
const displayData_1 = require("../controller/displayData");
const mergeData_1 = require("../controller/mergeData");
const deleteFiles_1 = require("../controller/deleteFiles");
const newfilepath = `./backup/MergedData_${Date.now()}.txt`;
exports.newfilepath = newfilepath;
const router = express_1.default.Router();
router.get("/display", (req, res) => {
    (0, displayData_1.MergedData)(req, res);
});
router.post("/merge/:n1/:n2", (req, res) => {
    const file1Path = `./uploads/message${req.params.n1}.txt`;
    const file2Path = `./uploads/message${req.params.n2}.txt`;
    (0, mergeData_1.MergeData)(file1Path, file2Path, req, res);
});
router.post("/upload", uploadFiles_1.uploading, (req, res) => {
    res.send("uploaded");
});
router.delete("/delete/:n1/:n2", (req, res) => {
    const file1 = req.params.n1;
    const file2 = req.params.n2;
    (0, deleteFiles_1.delete_Files)(file1, file2, req, res);
});
exports.default = router;
//# sourceMappingURL=handlefiles.js.map