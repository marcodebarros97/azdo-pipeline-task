import fs from "fs";

export class WorkingDirectoryUtil {
    public setWorkingDirectory(workingDirectory: string): string {
        process.chdir(workingDirectory);
        console.log("Working directory is" + process.cwd());
        return process.cwd()
    }
}