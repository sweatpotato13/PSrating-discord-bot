import {
    Discord,
    Command,
    CommandMessage,
    CommandNotFound,
} from "@typeit/discord";
import { levelPng } from "../asset/levelpng";
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
                    value: obj.userinfo[0].birth,
                    inline: true,
                },
                { name: "Wins", value: obj.userinfo[0].win, inline: true },
                { name: "Rank", value: obj.userinfo[0].rank, inline: true },
                { name: "Rating", value: obj.userinfo[0].rating, inline: true }
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

    @Command("sa :handles")
    private async callSolvedAcUserInfo(message: CommandMessage) {
        const handles = message.args.handles;
        const obj = await info.getSolvedAcInfo(handles);
        const level = obj.level;
        const prefix = [
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
            "Ruby",
            "Master",
        ];
        const roman = ["I", "II", "III", "IV", "V"];
        const level_string =
            level > 0
                ? `${prefix[Math.floor((level - 1) / 5)]} ${
                      roman[4 - ((level - 1) % 5)]
                  }`
                : "Unrated";
        let class_string = obj.class.toString();
        for (let i = 0; i < obj.class_decoration; i++) {
            class_string += "+";
        }
        const embed = new dc.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`${handles}'s Solved.ac Info`)
            .setURL("https://solved.ac/profile/" + handles)
            .setThumbnail(levelPng[level])
            .addFields(
                { name: "Handle", value: handles },
                {
                    name: "Rank",
                    value: level_string,
                    inline: true,
                },
                {
                    name: "Rating",
                    value: obj.rating,
                    inline: true,
                },
                {
                    name: "Class",
                    value: class_string,
                    inline: true,
                },
                {
                    name: "Solved",
                    value: obj.solved,
                    inline: true,
                },
                {
                    name: "Contribute",
                    value: obj.vote_count,
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
