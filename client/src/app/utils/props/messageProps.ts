 interface messageProps{
    _id:string;
    sender:string;
    conversationId:string;
    message:string;
    state:string;
    status:string;
    createdAt?:Date;
    updatedAt?:Date;
    attachments:[{
        attachmentType:string;
        attachment:string;
    }]
}
export default messageProps