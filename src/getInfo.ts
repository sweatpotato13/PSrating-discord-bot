import * as fetch from "node-fetch";
import {
    IAtcoderUserInfo,
    ICodeforceUserInfo,
    ISolvedAcData,
    ITopcoderUserInfo,
} from "./interface";

export async function getCodeforcesInfo(
    handle: string
): Promise<ICodeforceUserInfo> {
    // Use Codeforce official API
    const response = await fetch(
        "http://codeforces.com/api/user.info?handles=" + handle
    );
    const obj = await response.json();
    return obj;
}

export async function getAtCoderInfo(
    handle: string
): Promise<IAtcoderUserInfo> {
    const response = await fetch("http://localhost:5000/v1.0/ac/" + handle);
    const obj = await response.json();
    return obj;
}

export async function getTopcoderInfo(
    handle: string
): Promise<ITopcoderUserInfo> {
    // Use Topcoder official API
    const response = await fetch("http://api.topcoder.com/v2/users/" + handle);
    const obj = await response.json();
    return obj;
}

export async function getSolvedAcInfo(
    handle: string
): Promise<ISolvedAcData> {
    const response = await fetch("https://api.solved.ac/v2/users/show.json?id=" + handle);
    const obj = await response.json();
    return obj.result.user[0];
}
