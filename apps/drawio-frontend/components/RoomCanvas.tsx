
import { WS_URL } from "@/config";
import { initDraw } from "@/initdraw";
import { useEffect, useRef, useState } from "react";
import { Loader } from "./ui/Loader";
import Canvas from "./Canvas";


export default function RoomCanvas({roomId}: {roomId: string}){
        
        const [socket, setSocket] = useState<WebSocket | null >(null);

        useEffect(()=>{
            const ws = new WebSocket(WS_URL);

            ws.onopen = () =>{
                setSocket(ws);
                const data = JSON.stringify({
                    type : "join_room",
                    roomId
                });
                ws.send(data);  
            }
        }, [])        

        if(!socket){
            return <div>
            <Loader></Loader>
                </div>
        }


    return <div>
        <Canvas roomId = {roomId} socket= {socket} /> 
        
    </div>
}