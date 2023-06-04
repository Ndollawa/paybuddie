 interface teamProps{
    _id: string;
    firstName: string;
    fullName: string;
    lastName: string;
    email: string;
    username: string;
    phone: string;
    userImage: string;
    status: string;
    bio: string;
    socialMedia:{
    facebookHandle: string;
    twitterHandle: string;
    instagram: string;
    whatsapp: string;
    }
    position: string;
    createdAt?:Date;
    updatedAt?:Date;
}
export default teamProps