 interface postProps{
    _id:string;
    title:string;
    author:string;
    description:string;
    body:string;
    tags:string[];
    coverImage:string;
    category:string;
    readCount:string;
    readingTime:string;
    status:string;
    createdAt?:Date;
    updatedAt?:Date;
}
export default postProps