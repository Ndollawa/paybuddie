import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WalletSchema =  new Schema({
    user:{
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true
    },
    balance:{
        type:Schema.Types.Decimal128,
        required: true,
        default: 0
    },
    rawBalance:{
        type:Number,
        required: true,
        default: 0
    },
    wallet_type:{
        type:String,
        required: true,
        enum:{
            values:["credits",'fiat', 'crypto'],
            message: '{VALUE} not supported'
        }
    },
    currency:{
        type:String,
        required: true,
    }

});

export default mongoose.model('Wallet',WalletSchema);