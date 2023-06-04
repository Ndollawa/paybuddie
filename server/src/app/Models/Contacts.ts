import mongoosePaginate from 'mongoose-paginate-v2'
import mongoose, { SchemaType,  Document } from 'mongoose';
const Schema = mongoose.Schema;


export interface userContactsInterface extends Document{
    user: string | undefined;
    contacts: string[] | undefined;
}

const ContactsSchema =  new Schema<userContactsInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    
    contacts:{
        type:  [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },    

},{timestamps:true} );
ContactsSchema.plugin(mongoosePaginate);

export default mongoose.model('Contacts',ContactsSchema);