import { MessageScreen } from '@/components/MessageScreen';
import { AuthorType, MessageContext, type MessageType } from '@/Contexts/mainContext';
import { useState } from "react";
import { View } from "react-native";

//import { initWhisper, initWhisperVad } from 'whisper.rn';


export default function Index() {
/** 
  const whisperContext = initWhisper({
    filePath: require('../assets/models/ggml-base.bin'),
  });

  const whisperVAD =  initWhisperVad({
    filePath: require('../assets/models/ggml-silero-v5.1.2.bin'),
    nThreads: 2,
  })
*/
  const [messages, setMessages] = useState<MessageType[]>([]);
  
  const addUserMessage = (content:string) => {
    const newMessage: MessageType = {
      text: content,
      author: AuthorType.USER,
    };
    setMessages([...messages, newMessage]);
  };
  
  const addBotMessage = (content: string) => {
    const newMessage: MessageType = {
      text: content,
      author: AuthorType.BOT,
    };
    setMessages([...messages, newMessage]);
  };
  return (

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: 'stretch',
        }}
      >
        <MessageContext value={{ messages, setMessages, addUserMessage, addBotMessage}}>
           <MessageScreen />
        </MessageContext>
      </View>
  );
}
