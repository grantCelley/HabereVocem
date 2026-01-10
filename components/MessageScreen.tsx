import { ChatBubble } from "@/components/chatBubble";
import { SendForm } from "@/components/SendForm";
import { MessageContext } from "@/Contexts/mainContext";
import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";



export const MessageScreen = () => {
    const messageContext = useContext(MessageContext);
    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={messageContext.messages} renderItem={(item) => {
                return (
                <ChatBubble message={item.item} />
                )
            }} />
            
        
        <View style={styles.input}>
            <SendForm />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        
        maxHeight: "85%",
        textAlignVertical: "top",
    },

    input:{
        position:"fixed",
        bottom: 0,
        right: 0,
        minHeight:"5%",
        maxHeight:"45%",
        height:"auto"

        
    },
    container:{
        height:'100%'
    }
});
