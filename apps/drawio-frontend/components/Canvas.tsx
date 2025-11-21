import { initDraw } from "@/initdraw";
import { useEffect, useRef } from "react";


export default function Canvas ({roomId, socket } : {    //Main Drawing area after connecting users
    roomId : string, 
    socket : WebSocket
}){
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(canvasRef.current){

            initDraw(canvasRef.current, roomId, socket);  //Draw logic
        }
    }, [canvasRef]);

return <div>
    <canvas ref={canvasRef} width={1000} height={10000} ></canvas>
</div>

}
