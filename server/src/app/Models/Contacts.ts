import mongoosePaginate from 'mongoose-paginate-v2'
import mongoose, { SchemaType } from 'mongoose';
const Schema = mongoose.Schema;

const ContactsSchema =  new Schema({
    user:{
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true
    },
    contacts:{
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true,
        default:[]
    },    

},{timestamps:true} );
ContactsSchema.plugin(mongoosePaginate);

export default mongoose.model('Contacts',ContactsSchema);