import azureTaskLibrary = require('azure-pipelines-task-lib');
import { ScanTargetUtil } from './fileSystemUtil/scanTargetUtil';
import { WorkingDirectoryUtil } from './fileSystemUtil/workingDirectoryUtil';

let scanTargetExtenstions: string = azureTaskLibrary.getInput('scanTargetExtensions', true) ?? '';
let scanTargetFiles: string[] = [];


function determineFilesToScan() {
    let workingDirectoryUtil = new WorkingDirectoryUtil();
    let workingDirectory: string = workingDirectoryUtil.setWorkingDirectory(azureTaskLibrary.getInput('workingDirectory', true) ?? '');
    let scanTargetUtil = new ScanTargetUtil();
    let scanTargetExtenstionsList: string[] = scanTargetExtenstions.split(",");
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