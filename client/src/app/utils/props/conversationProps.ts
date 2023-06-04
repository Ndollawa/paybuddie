 interface conversationProps{
    _id:string;
    members:string[];
    createdAt?:Date;
    updatedAt?:Date;
}
export  type conversationIdProps = [string,string]

export default conversationProps