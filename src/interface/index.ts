export interface IAtcoderUserInfo {
    data: IAtCoderData;
}

export interface IAtCoderData {
    birth_year: number;
    competitions: number;
    country: string;
    formal_country_name: string;
    highest_rating: number;
    rank: number;
    rating: number;
    updated: string;
    user_color: string;
    wins: number;
}

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
