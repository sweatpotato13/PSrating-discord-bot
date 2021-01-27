import {
    Discord,
    Command,
    CommandMessage,
    CommandNotFound,
} from "@typeit/discord";
import * as info from "../getInfo";
const dc = require("discord.js");
const embed = new dc.MessageEmbed().addField("Rating", 0);

@Discord(";")
export abstract class AppDiscord {
    @Command("cf :handles")
    private async callCfUserInfo(message: CommandMessage) {
        const handles = message.args.handles;
        const obj = await info.getCodeforcesInfo(handles);
        let avatar = obj["result"][0]["avatar"];
        while (avatar.charAt(0) === "/") {
            avatar = avatar.substring(1);
        }
        const embed = new dc.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`${handles}'s Codeforces Info`)
            .setURL("https://codeforces.com/profile/" + handles)
            .setThumbnail("http://" + avatar)
            .addFields(
                { name: "Handle", value: obj["result"][0]["handle"] },
                { name: "Rank", value: obj["result"][0]["rank"], inline: true },
                {
                    name: "Rating",
                    value: obj["result"][0]["rating"],
                    inline: true,
                },
                { name: "MaxRank", value: obj["result"][0]["maxRank"] },
                {
                    name: "MaxRating",
                    value: obj["result"][0]["maxRating"],
                    inline: true,
                }
            )
            .setTimestamp();
        message.channel.send({ embed: embed });
        console.log(obj);
    }

    @Command("ac :handles")
    private async callAcUserInfo(message: CommandMessage) {
        const handles = message.args.handles;
        const obj = await info.getAtCoderInfo(handles);
        const embed = new dc.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`${handles}'s AtCoder Info`)
            .setURL("https://atcoder.jp/users/" + handles)
            .addFields(
                { name: "Handle", value: handles },
                {
                    name: "Birth Year",
                    value: obj["data"]["birth_year"],
                    inline: true,
                },
                {
                    name: "Country",
                    value: obj["data"]["formal_country_name"],
                    inline: true,
                },
                {
                    name: "Competitions",
                    value: obj["data"]["competitions"],
                    inline: true,
                },
                { name: "Wins", value: obj["data"]["wins"], inline: true },
                {
                    name: "Highest Rating",
                    value: obj["data"]["highest_rating"],
                    inline: true,
                },
                { name: "Rank", value: obj["data"]["rank"], inline: true },
                { name: "Rating", value: obj["data"]["rating"], inline: true }
            )
            .setTimestamp();
        message.channel.send({ embed: embed });
        console.log(obj);
    }

    @Command("tc :handles")
    private async callTcUserInfo(message: CommandMessage) {
        const handles = message.args.handles;
        const obj = await info.getTopcoderInfo(handles);
        let idx = 0;
        for (idx = 0; idx < obj["ratingSummary"].length; idx++) {
            if (obj["ratingSummary"][idx].name === "Algorithm") {
                break;
            }
        }
        const embed = new dc.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`${handles}'s Topcoder Info`)
            .setURL("https://www.topcoder.com/members/" + handles)
            .addFields(
                { name: "Handle", value: handles },
                {
                    name: "CreateAt",
                    value: obj["memberSince"],
                    inline: true,
                },
                {
                    name: "Country",
                    value: obj["country"],
                    inline: true,
                },
                {
                    name: "Rating",
                    value: obj["ratingSummary"][idx]["rating"],
                    inline: true,
                }
            )
            .setTimestamp();
        message.channel.send({ embed: embed });
        console.log(obj);
    }

    @CommandNotFound()
    notFoundA(command: CommandMessage) {
        command.reply("Command not found");
    }
}
