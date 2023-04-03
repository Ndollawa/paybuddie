import mongoose, { Document, SchemaType } from 'mongoose';
const Schema = mongoose.Schema;



export interface rewardInterface extends Document {
    status: string;
    creditValue: number;
    creditType:string;
    rewardType: string;
    user: string | undefined ;
}

const RewardSchema =  new Schema<rewardInterface>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    creditValue: { type: Number, default: 0 }, 
    creditType:{
        type:String,
        required: true,
        enum:{
            values:["credit",'fiat', 'crypto'],
            message: '{VALUE} not supported'
        }
    },
    rewardType:{
        type:String,
        required: true,
        enum:{
            values:["signup bonus",'referral bonus', 'transaction bonus'],
            message: '{VALUE} not supported'
        }
    },
     
    status:{
        type:String,
        required: true,
        enum:{
            values:["received",'pending', 'eligible','in-eligible','failed'],
            message: '{VALUE} not supported'
        },
        default:'pending'
    },

});

export default  mongoose.model<rewardInterface>('Reward',RewardSchema);