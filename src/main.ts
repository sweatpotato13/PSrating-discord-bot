import * as fetch from "node-fetch";
import { Client } from "@typeit/discord";
import conf from "../config.json";

const handles = { atcoder: "CuteWisp", codeforces: "CuteWisp" };

function getCodeforcesRating() {
    // Use Codeforce official API
    let data = "";
    fetch(
        "http://codeforces.com/api/user.info?handles=" + handles["codeforces"]
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            data = myJson;
            console.log(data["result"][0]["rating"]);
        });
}

function getAtCoderRating() {
    // https://github.com/miozune/AtCoderUsersAPI
    let data = "";
    fetch(
        "https://us-central1-atcoderusersapi.cloudfunctions.net/api/info/username/" +
            handles["atcoder"]
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            data = myJson;
            console.log(data["data"]["rating"]);
        });
}

export class Main {
    private static _client: Client;

    static get Client(): Client {
        return this._client;
    }

    static start() {
        this._client = new Client();

        this._client.login(
            conf.token,
            `${__dirname}/discords/*.ts`,
            `${__dirname}/discords/*.js`
        );

        console.log(Client.getCommands());
    }
}

Main.start();
