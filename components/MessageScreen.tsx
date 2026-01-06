import { ChatBubble } from "@/components/chatBubble";
import { SendForm } from "@/components/SendForm";
import { MessageContext } from "@/Contexts/mainContext";
import { useContext, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";



export const MessageScreen = () => {
    const messageContext = useContext(MessageContext);
    const [messages, setMessages] = useState(messageContext.messages);
    const messageLength = messages.length;
    return (
        <View>
        <ScrollView style={styles.list}>
            <FlatList data={messages} renderItem={(item) => {
                return (
                <ChatBubble message={item.item} />
                )
            }} />
            
        </ScrollView>
        <View style={styles.input}>
        <SendForm />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
        
    },

    input:{
        position: 'fixed',
        bottom: 0,
        left:0,
        right:0,
        borderColor: '#000',
    }
});
