import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const ConversationSchema =  new Schema({
 
    member:{
        type:Array,
    },
  
    // state:{
    //     type:String,
    //     enum: {
    //         values: ['read', 'unread'],
    //         conversation: '{VALUE} is not supported'
    //       },
    //     default:'unread',
    //     required: true   
    // },
  
    // status:{
    //     type:String,
    //     enum: {
    //         values: ['active', 'deleted'],
    //         conversation: '{VALUE} is not supported'
    //       },
    //     default:'active',
    //     required: true   
    // },

},
{timestamps:true});
ConversationSchema.plugin(mongoosePaginate);
export default mongoose.model('Conversation',ConversationSchema);