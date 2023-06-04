 interface slideProps{
   _id:string;
    title: string;
    description: string;
    body: string;
    cto:{
      cto_text?:string;
      link?:string;
    }
    image: string;
    status: string;
    createdAt?:Date;
    updatedAt?:Date;
}
export default slideProps