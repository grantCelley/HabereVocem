
export enum AuthorType{
    USER = 'user',
    BOT = 'BOT'
}

export interface MessageType{
    text: string,
    author: AuthorType
}