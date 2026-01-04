import { MessageType } from '@/Contexts/mainContext';
import { Text, View } from 'react-native';

interface ChatBubbleProps {
    message: MessageType;
}

export const ChatBubble = (props: ChatBubbleProps) => {
    return (
        <View>
            <Text>{props.message.text}</Text>
        </View>
    )
}