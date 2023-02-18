"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const azureTaskLibrary = require("azure-pipelines-task-lib");
const scanTargetUtil_1 = require("./fileSystemUtil/scanTargetUtil");
const workingDirectoryUtil_1 = require("./fileSystemUtil/workingDirectoryUtil");
let scanTargetExtenstions = (_a = azureTaskLibrary.getInput('scanTargetExtensions', true)) !== null && _a !== void 0 ? _a : '';
let scanTargetFiles = [];
function determineFilesToScan() {
    var _a;
    let workingDirectoryUtil = new workingDirectoryUtil_1.WorkingDirectoryUtil();
    let workingDirectory = workingDirectoryUtil.setWorkingDirectory((_a = azureTaskLibrary.getInput('workingDirectory', true)) !== null && _a !== void 0 ? _a : '');
    let scanTargetUtil = new scanTargetUtil_1.ScanTargetUtil();
    let scanTargetExtenstionsList = scanTargetExtenstions.split(",");
    console.log(scanTargetExtenstionsList);
    scanTargetExtenstionsList.forEach(extension => {
        let files = scanTargetUtil.buildListOfScanTargetFiles(workingDirectory, extension);
        files.forEach(element => {
            scanTargetFiles.push(element);
        });
    });
    console.log(scanTargetFiles);
    return scanTargetFiles;
}
determineFilesToScan();
