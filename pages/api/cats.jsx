import { PrismaClient } from "@prisma/client";

export default async function handler(req, res){
    const prisma = new PrismaClient()

    const cats = await prisma.cat.findMany()

    res.status(200).json(cats)

    if(req.method === 'DELETE'){
        const cat = await prisma.cat.delete({
            where:{
                id: parseInt(req.body.id)
            }
        })
        res.status(200).json(cat)
    }

    if(req.method === 'POST'){
        const cat = await prisma.cat.create({
            data:{
                url: req.body.url,
                breeds: req.body.breeds
            }
        })
        
        res.status(200).json(cat)
    }

    
}