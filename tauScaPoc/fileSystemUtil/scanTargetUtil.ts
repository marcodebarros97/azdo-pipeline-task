import path from "path";
import fs from "fs";

export class ScanTargetUtil {

    scanTargets: string[] = [];

    public buildListOfScanTargetFiles(workingDirectory: string, fileExtension: string): string[] {
        this.scanDirectory(workingDirectory, fileExtension);
        return this.scanTargets;
    }

    public scanDirectory(workingDirectory: string, fileExtension: string) {
        if (!fs.existsSync(workingDirectory)) {
            console.log("Directory not found ", workingDirectory);
            throw new Error("Directory not found " + workingDirectory);
        } else {
            var files = fs.readdirSync(workingDirectory);
            for (var i = 0; i < files.length; i++) {
                var filename = path.join(workingDirectory, files[i]);
                var stat = fs.lstatSync(filename);
                console.log(filename);
                if (stat.isDirectory()) {
                    this.scanDirectory(filename, fileExtension);
                } else if (filename.endsWith(fileExtension)) {
                    this.scanTargets.push(filename);
                };
            };
        }
    };
}