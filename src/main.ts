import { Client } from "@typeit/discord";
import conf from "../config.example.json";

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
