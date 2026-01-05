import { ChatBubble } from "@/components/chatBubble";
import { AuthorType, MessageType } from "@/Contexts/mainContext";
import { FlatList, ScrollView, StyleSheet } from "react-native";



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
        <ScrollView style={styles.list}>
            <FlatList data={messages} renderItem={(item) => {
                return (
                <ChatBubble message={item.item} />
                )
            }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
    }
});
