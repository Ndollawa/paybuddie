import mongoosePaginate from 'mongoose-paginate-v2'
import mongoose, { SchemaType } from 'mongoose';
const Schema = mongoose.Schema;

const RoomSchema =  new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    status:{
        type:String,
        required: true,
        enum:{
            values:["active",'inactive'],
            message: '{VALUE} not supported'
        },
        default:'active'
    },
    image:{
        type:String,
        required:false
    }
   
},{timestamps:true} );
RoomSchema.plugin(mongoosePaginate);

export default mongoose.model('Room',RoomSchema);