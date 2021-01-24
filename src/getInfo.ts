import * as fetch from "node-fetch";

export async function getCodeforcesInfo(handle) {
    // Use Codeforce official API
    const response = await fetch(
        "http://codeforces.com/api/user.info?handles=" + handle
    );
    const obj = await response.json();
    return obj;
}

export async function getAtCoderInfo(handle) {
    // https://github.com/miozune/AtCoderUsersAPI
    const response = await fetch(
        "https://us-central1-atcoderusersapi.cloudfunctions.net/api/info/username/" +
            handle
    );
    const obj = await response.json();
    return obj;
}

export async function getTopcoderInfo(handle) {
    // Use Topcoder official API
    const response = await fetch(
        "http://api.topcoder.com/v2/users/" + handle
    );
    const obj = await response.json();
    return obj;
}
