import mongoosePaginate from 'mongoose-paginate-v2'
import mongoose, { SchemaType } from 'mongoose';
const Schema = mongoose.Schema;

const SlideSchema =  new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required: true,
    },
    cto:{
       cto_text:{
        type:String,
       },
       link:{ 
        type:String,
    }
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
    image:{
        type:String,
        required:false
    }
   
},{timestamps:true} );
SlideSchema.plugin(mongoosePaginate);

export default mongoose.model('Slide',SlideSchema);