import mongoose, { Date, Document } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';


const Schema = mongoose.Schema;


export interface userInterface extends Document{
        _id:string | undefined;
        firstName: string | undefined;
        lastName: string | undefined;
        fullName:string | undefined;
        email: string;
        password: string;
        username: string | undefined;
        phone: string | undefined;
        dob: string | undefined;
        gender: string | undefined;
        address: string | undefined;
        city: string | undefined;
        state: string | undefined;
        country: string | undefined;
        occupation: string | undefined;
        bio: string | undefined;
        userImage: string | undefined;
        accountStatus:string | number;
        online:{
            status:boolean;
            lastSeen:Date;
        }
        verificationStatus: number | boolean;
        accountSecurity_2FA: boolean | number;
        roles:  {
            User: number;
            Admin?: number | undefined;
            Dev?: number | undefined;
            Staff?: number | undefined;
        } ;
        refreshToken: string[];
}
// :userInterface 
const UserSchema=  new Schema<userInterface>({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    username:{
        type:String
    },
    fullName: {
        type: String,
        get: function () {
          return `${(this as any).firstName} ${(this as any).lastName}`;
        },
      },
    password:{
        type:String,
        required: true
    },
     phone:{
        type:String
    },
    dob:{
        type:String
    },
    gender:{
         type:String,
        enum: {
            values: ['male', 'female'],
            message: '{VALUE} is not supported'
          },
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    occupation:{
        type:String
    },
    bio:{
        type:String
    },
    userImage:{
        type:String
    },
    accountStatus:{
         type:String,
    enum: {
        values: ['pending','active', 'banned','disabled','deactivated','deleted'],
        message: '{VALUE} is not supported'
      },
    default:'active',
    required: true   
    },
      
    verificationStatus:{
        type:Boolean,
        default:false,
        required: true   
    },
    online:{
        status:{ type:Boolean},
        lastSeen:{ type:Date},
    },
    accountSecurity_2FA:{
        type:Boolean,
        default:false,
        required: true   
    },
    roles:{
        User:{ 
        type:Number,
        default:1003,},
        Admin:Number,
        Dev:Number,
        Staff:Number, 
    },
    refreshToken: [String]


},
{timestamps:true});
UserSchema.plugin(mongoosePaginate);

export default mongoose.model<userInterface>('User',UserSchema);