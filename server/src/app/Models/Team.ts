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
TeamSchema.virtual('fullName').get(function () {
    return `${(this as any).firstName} ${(this as any).lastName}`;
  }).set(function(v) {
      // `v` is the value being set, so use the value to set
      // `firstName` and `lastName`.
      const firstName = v.substring(0, v.indexOf(' '));
      const lastName = v.substring(v.indexOf(' ') + 1);
      this.set({ firstName, lastName });
    });
TeamSchema.plugin(mongoosePaginate);

export default mongoose.model('Team',TeamSchema);