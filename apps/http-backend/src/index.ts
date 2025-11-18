import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { AuthRequest, middleware } from "./middleware";
import { CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common/types"
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt";


const app = express();
app.use(express.json());

app.post("/signup", async (req, res)=>{
    const parsedData = CreateUserSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    

    try {
        const pass= parsedData.data?.password;

        const hashedPassword = await bcrypt.hash(pass, 10); // hash the password to store in the database;
        const user = await prismaClient.user.create({
            data : {
                email : parsedData.data?.username,
                password : hashedPassword,
                name: parsedData.data.name
            }
        })
        res.json({
                userId: user.id
        })   
    } catch (error) {
        res.status(411).json({
            message : "User already exists"
        })
    }
})

app.post("/signin", async (req, res)=>{
    const parseData = SigninSchema.safeParse(req.body);
    if(!parseData.success){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const password = parseData.data.password;

    const user = await prismaClient.user.findFirst({
        where: {
            email: parseData.data.username,
        }
    })
    if(!user){
        res.status(403).json({
            message: "user does not exist"
        })  
        return; 
    }    

    const passMatch = await bcrypt.compare(password, user?.password);

    if(passMatch){   //Note: token is generated using user Id and not password 
        const token = jwt.sign({
                userId : user?.id
        }, JWT_SECRET);

        res.json({
                token
        });
    }else{
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
})

app.post("/room", middleware, async (req: AuthRequest, res)=>{
    // db call
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const userId =  req.userId;

    const room = await prismaClient.room.create({
        data : {
            slug: parsedData.data.name,
            adminId: userId
        }
    })

    res.json({
        roomId : room.id
    })
})



app.listen(3001);
