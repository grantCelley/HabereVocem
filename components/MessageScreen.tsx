import { ChatBubble } from "@/components/chatBubble";
import { MessageContext } from "@/Contexts/mainContext";
import { useContext, useState } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";



export const MessageScreen = () => {
    const messageContext = useContext(MessageContext);
    const [messages, setMessages] = useState(messageContext.messages);
    const messageLength = messages.length;
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
