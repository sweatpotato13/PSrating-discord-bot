import {
    Discord,
    Command,
    CommandMessage,
    CommandNotFound,
} from "@typeit/discord";
import * as info from "../getInfo";

@Discord(";")
export abstract class AppDiscord {
    @Command("cf :handles")
    private async callCfUserInfo(message: CommandMessage) {
        const handles = message.args.handles;
        let rating = await info.getCodeforcesInfo(handles);
        message.reply(rating["result"][0]["rating"]);
        console.log(rating);
    }

    @Command("ac :handles")
    private async callAcUserInfo(message: CommandMessage) {
        const handles = message.args.handles;
        let rating = await info.getAtCoderInfo(handles);
        message.reply(rating["data"]["rating"]);
        console.log(rating);
    }

    @CommandNotFound()
    notFoundA(command: CommandMessage) {
        command.reply("Command not found");
    }
}
