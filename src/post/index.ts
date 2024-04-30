import os from "os";
import * as  io from "@actions/io";
import * as core from "@actions/core";
import * as exec from "@actions/exec";

async function post(): Promise<void> {
    if (await io.which(os.homedir() + "./kernel")) {
        await exec.exec("cd kernel && git clean -dxf");
        return;
    }
}

(async () => {
    try {
        if (process.env.GITHUB_ACTIONS === 'true') {
            await post();
        } else {
            console.error("This Cleanup Script Is Intended For Github Action Runner.");
            process.exit(2);
        }
    } catch (error) {
        console.error("Failed to execute post step.");
        process.exit(1);
    }
})();
