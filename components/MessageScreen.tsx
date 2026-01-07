import { ChatBubble } from "@/components/chatBubble";
import { SendForm } from "@/components/SendForm";
import { MessageContext } from "@/Contexts/mainContext";
import { useContext } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";



export const MessageScreen = () => {
    const messageContext = useContext(MessageContext);
    return (
        <View>
        <ScrollView style={styles.list}>
            <FlatList data={messageContext.messages} renderItem={(item) => {
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
        flex: 5,
        maxHeight: "85%"
    },

    input:{
        flex:1,
        position: 'fixed',
        bottom: 0,
        left:0,
        right:0,
        minHeight:"10%",
        
    }
});
