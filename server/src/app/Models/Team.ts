import mongoosePaginate from 'mongoose-paginate-v2'
import mongoose, { SchemaType } from 'mongoose';
const Schema = mongoose.Schema;

const TeamSchema =  new Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    position:{
        type:String,
    },
    bio:{
        type:String,
    },
    phone:{
        type:String,
    },
    fullName: {
        type: String,
        get: function () {
          return `${(this as any).firstName} ${(this as any).lastName}`;
        },
      },
    email:{
        type:String,
        required: true,
        unique: true
    },
    userImage:{
        type:String
    },
    socialMedia:{
    facebookHandle:{type:String},
    twitterHandle:{type:String},
    instagram:{type:String},
    whatsapp:{type:String }
    },
    status:{
        type:String,
        required: true,
        enum:{
            values:["active",'inactive'],
            message: '{VALUE} not supported'
        },
        default:'active'
    },
},{timestamps:true} );
TeamSchema.plugin(mongoosePaginate);

export default mongoose.model('Team',TeamSchema);