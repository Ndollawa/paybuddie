import {userInterface} from '../../src/app/Models/User'
declare global{
    namespace Express{
        interface Request {
            userInfo:userInterface,
            roles:number[],
            user:string,
            userEmail:string|string[],
            username:string,
            path:string

        }
        interface Response {

        }
    }
}