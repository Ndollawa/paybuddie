import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const PostCategorySchema =  new Schema({
   
    title:{
        type:String,
        required: true,
        unique: true
    },
    status:{
        type:String,
        enum: {
            values: ['active', 'inactive'],
            message: '{VALUE} is not supported'
          },
        default:'active',
        required: true   
    }

},
{timestamps:true});
PostCategorySchema.plugin(mongoosePaginate);
export default mongoose.model('PostCategory',PostCategorySchema);