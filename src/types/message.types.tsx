export interface ISendMessageDto {
    receiverUserName : string;
    text: string;
}

export interface IMessageDto {
    id: number;
    senderUserName: string;
    createAt: string;
}