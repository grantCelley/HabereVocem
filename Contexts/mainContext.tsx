import { createContext } from "react";

export enum AuthorType{
    USER = 'user',
    BOT = 'BOT'
}

export interface MessageType{
    text: string,
    author: AuthorType
}

export const MessageContext = createContext<{
    messages: MessageType[],
    setMessages: (messages: MessageType[]) => void, 
    addUserMessage: (content: string) => void,
    addBotMessage: (content: string) => void,
}>({
    messages: [],
    setMessages: () => null,
    addUserMessage: () => null,
    addBotMessage: () => null,
});



