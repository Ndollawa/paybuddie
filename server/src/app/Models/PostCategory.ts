import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const PostCategorySchema =  new Schema({
    author:{
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true
    },
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
        default:'draft',
        required: true   
    }

},
{timestamps:true});
PostCategorySchema.plugin(mongoosePaginate);
export default mongoose.model('PostCategory',PostCategorySchema);