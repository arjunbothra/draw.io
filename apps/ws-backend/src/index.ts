import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";


const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, request) {  //request is a object that we get to interact with the url the user is trying to connect to   
  const url = request.url;
  if(!url){
    return;
  }

  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || "";
  const decoded = jwt.verify(token, JWT_SECRET); 
  const name = queryParams.get('name');

  if(!decoded || !(decoded as JwtPayload).userId){
    ws.close();
    return;
  }

  ws.on('message', function message(data){
    ws.send('pong');
  })

});
