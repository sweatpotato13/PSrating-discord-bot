// Atcoder
export interface IAtcoderUserInfo {
    userinfo: IData[];
}
export interface IData {
    birth: number;
    highest: number;
    match: number;
    rank: number;
    rating: number;
    user: string;
    win: number;
}

// Codeforces
export interface ICodeforceUserInfo {
    status: string;
    result: ICodeforceData[];
}

export interface ICodeforceData {
    handle: string;
    email: string;
    vkId: string;
    openId: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    organization: string;
    contribution: number;
    rank: string;
    rating: number;
    maxRank: string;
    maxRating: number;
    lastOnlineTimeSeconds: number;
    registrationTimeSeconds: number;
    friendOfCount: number;
    avatar: string;
    titlePhoto: string;
}

// Topcoder
export interface ITopcoderUserInfo {
    handle: string;
    country: string;
    memberSince: string;
    quote: string;
    photoLink: string;
    copilot: boolean;
    ratingSummary: IRatingSummary[];
    achievements: IAchievements[];
    serverInformation: IServerInformation;
    requesterInformation: IRequesterInformation;
}

export interface IRatingSummary {
    name: string;
    rating: number;
    colorStyle: string;
}

export interface IAchievements {
    date: string;
    description: string;
}

export interface IServerInformation {
    serverName: string;
    apiVersion: string;
    requestDuration: number;
    currentTime: number;
}

export interface IRequesterInformation {
    id: string;
    remoteIP: string;
    receivedParams: IReceivedParams;
}

export interface IReceivedParams {
    apiVersion: string;
    handle: string;
    action: string;
}

// Solved.ac
export interface ISolvedAcUserInfo {
    success: string;
    result: ISolvedAcUser[];
}

export interface ISolvedAcUser {
    user: ISolvedAcData[];
}

export interface ISolvedAcData {
    user_id: string;
    bio: string;
    profile_image_url: string;
    solved: number;
    exp: number;
    level: number;
    class: number;
    class_decoration: number;
    rating: number;
    rating_problems: number;
    rating_class: number;
    rating_solved_count: number;
    rating_vote_count: number;
    vote_count: number;
    rank: number;
    is_rival: boolean;
    is_reverse_ribal: boolean;
    organizations: any;
    reverse_rival_count: number;
    background_image: any;
    badge: any;
}
