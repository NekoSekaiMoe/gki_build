import fs from "fs";
import os from "os";
import * as core from "@actions/core";
import * as io from "@actions/io";
import * as exec from "@actions/exec";

export async function execBash(cmd : string) {
    await exec.exec("bash", ["-xc", cmd]);
}

export async function execBashSudo(cmd : string) {
    await execBash("$(which sudo) " + cmd);
}

export async function execMkdir(cmd : string) {
    await execBashSudo("$(which mkdir) " + cmd);
}
