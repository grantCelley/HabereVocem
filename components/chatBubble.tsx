import { AuthorType, MessageType } from '@/Contexts/mainContext';
import { StyleSheet, Text, View } from 'react-native';

interface ChatBubbleProps {
    message: MessageType;
}

export const ChatBubble = (props: ChatBubbleProps) => {


    return (
        <View >
            <Text style={[styles.text, props.message.author == AuthorType.USER ? styles.userStyles : styles.botStyles ]}>{props.message.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    
    text: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#000',
        padding: 5,
        borderRadius: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        
    },

    userStyles: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        backgroundColor: 'dodgerblue',
    },

    botStyles: {
       textAlign: 'right',
       alignSelf: 'flex-end',
       backgroundColor: 'lawngreen',

    },
        
    
})