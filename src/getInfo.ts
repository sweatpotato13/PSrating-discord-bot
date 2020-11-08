import * as fetch from "node-fetch";

export async function getCodeforcesInfo(handle) {
    // Use Codeforce official API
    const response = await fetch(
        "http://codeforces.com/api/user.info?handles=" + handle
    );
    const obj = await response.json();
    return obj;
}

export async function getAtCoderInfo(handle): Promise<string> {
    // https://github.com/miozune/AtCoderUsersAPI
    const response = await fetch(
        "https://us-central1-atcoderusersapi.cloudfunctions.net/api/info/username/" +
            handle
    );
    const obj = await response.json();
    return obj;
}
