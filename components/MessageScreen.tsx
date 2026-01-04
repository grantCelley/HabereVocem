import { ChatBubble } from "@/components/chatBubble";
import { AuthorType, MessageType } from "@/Contexts/mainContext";
import { FlatList, ScrollView, } from "react-native";



export const MessageScreen = () => {
    const messages: MessageType[] = [
        {
            author: AuthorType.USER,
            text: "User Text"
        },
        {
            author: AuthorType.BOT,
            text: "Bot Text"
        }
    ];

    return (
        <ScrollView>
            <FlatList data={messages} renderItem={(item) => {
                return (
                <ChatBubble message={item.item} />
                )
            }} />
        </ScrollView>
    );
}
