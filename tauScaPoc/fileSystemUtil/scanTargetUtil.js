"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanTargetUtil = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class ScanTargetUtil {
    constructor() {
        this.scanTargets = [];
    }
    buildListOfScanTargetFiles(workingDirectory, fileExtension) {
        this.scanDirectory(workingDirectory, fileExtension);
        return this.scanTargets;
    }
    scanDirectory(workingDirectory, fileExtension) {
        if (!fs_1.default.existsSync(workingDirectory)) {
            console.log("Directory not found ", workingDirectory);
            throw new Error("Directory not found " + workingDirectory);
        }
        else {
            var files = fs_1.default.readdirSync(workingDirectory);
            for (var i = 0; i < files.length; i++) {
                var filename = path_1.default.join(workingDirectory, files[i]);
                var stat = fs_1.default.lstatSync(filename);
                console.log(filename);
                if (stat.isDirectory()) {
                    this.scanDirectory(filename, fileExtension);
                }
                else if (filename.endsWith(fileExtension)) {
                    this.scanTargets.push(filename);
                }
                ;
            }
            ;
        }
    }
    ;
}
exports.ScanTargetUtil = ScanTargetUtil;
