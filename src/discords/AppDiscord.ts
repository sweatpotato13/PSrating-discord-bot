import { Discord, On, Client, ArgsOf } from "@typeit/discord";

@Discord()
export abstract class AppDiscord {
    @On("message")
    onMessage([message]: ArgsOf<"message">, client: Client) {
        console.log(message.content);
    }
}
