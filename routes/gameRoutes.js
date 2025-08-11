const express=require('express')
const Game=require('../models/gameModel')

const router=express.Router();

router.post('/',async(req,res)=>{
    try {
        const game=await Game.create(req.body);
        res.status(201).json(game)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/',async(req,res)=>{
    const games=await Game.find().populate('publisher','name',location);
    res.json(games)
})

router.put('/:id',async(req,res)=>{
    try {
        const game=await Game.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(game)
    } catch (error) {
         res.status(400).json({error:error.message})
    }
});

router.delete('/:id',async(req,res)=>{
    try {
        const game=await Game.findByIdAndDelete(req.params.id);
        res.json({message:'game deleted'})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports=router