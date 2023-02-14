import {io} from 'socket.io-client'
import { useEffect,useState } from 'react'


const useSocketIO = () =>{
const [socket,setSocket] = useState<any>()
useEffect(()=>{
   const socket = io('http://localhost:3501')
   setSocket(socket)
   return ()=>{
    socket.disconnect()
}
},[])
return socket
}

export default useSocketIO