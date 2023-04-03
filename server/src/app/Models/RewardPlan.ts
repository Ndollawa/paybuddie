import mongoose, { Document, SchemaType } from 'mongoose';
const Schema = mongoose.Schema;

export interface rewardPlanInterface extends Document {
    status: string;
    creditValue: number;
    rewardTitle: string;
    description: string;
    startsAt: Date;
    endsAt: Date;
    creditType:string;
    rewardType: string;
}

const RewardPlanSchema =  new Schema<rewardPlanInterface>({

    creditValue: { 
        type: Number, 
        default: 0 }, 
    rewardTitle:{
        type:String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required: true
    },
    startsAt:{
        type:Date,
        required: true,
    },
    endsAt:{
        type:Date,
        required: true,
    },
    status:{
        type:String,
        required: true,
        enum:{
            values:["activate",'inactive', 'closed'],
            message: '{VALUE} not supported'
        },
        default:'active'
    }, 
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
    }



});

export default mongoose.model<rewardPlanInterface>('RewardPlan',RewardPlanSchema);