import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const ConversationSchema =  new Schema({
 
    members:{
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
  
   
},
{timestamps:true});
ConversationSchema.plugin(mongoosePaginate);
export default mongoose.model('Conversation',ConversationSchema);