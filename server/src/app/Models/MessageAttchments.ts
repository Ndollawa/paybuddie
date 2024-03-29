import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const MessageAttachmentsSchema =  new Schema({
    messageId:{ type: Schema.Types.ObjectId, ref: 'Message' },
    attachmentType:{
        type:String,
        enum: {
            values: ['active', 'deleted'],
            message: '{VALUE} is not supported'
          },
        required: true
    },
    attachment:{
        type:String,
        required: true
    },
  
    state:{
        type:String,
        enum: {
            values: ['read', 'unread'],
            message: '{VALUE} is not supported'
          },
        default:'unread',
        required: true   
    },
    status:{
        type:String,
        enum: {
            values: ['active', 'deleted'],
            message: '{VALUE} is not supported'
          },
        default:'active',
        required: true   
    },

},
{timestamps:true});
MessageAttachmentsSchema.plugin(mongoosePaginate);
export default mongoose.model('Message',MessageAttachmentsSchema);