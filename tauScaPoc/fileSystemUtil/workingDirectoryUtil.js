"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkingDirectoryUtil = void 0;
class WorkingDirectoryUtil {
    setWorkingDirectory(workingDirectory) {
        process.chdir(workingDirectory);
        console.log("Working directory is" + process.cwd());
        return process.cwd();
    }
}
exports.WorkingDirectoryUtil = WorkingDirectoryUtil;
