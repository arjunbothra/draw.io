import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";


export interface AuthRequest extends Request {
    userId?: string;
}


export function middleware (req: AuthRequest, res: Response, next: NextFunction){
    const token = req.headers["authorization"] ?? "";
    
    const decoded = jwt.verify(token , JWT_SECRET) as {userId : string};
    if(decoded){
        req.userId = decoded.userId;
        next();
    }else{
        res.status(403).json({
            message: "Unauthorized"
        })
    }

}