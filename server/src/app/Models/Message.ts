import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    author:{
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true
    },
    fromUser:{
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true
    },
    toUser:{
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true
    },
    message:{
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

},
{timestamps:true});
MessageSchema.plugin(mongoosePaginate);
export default mongoose.model('Message',MessageSchema);