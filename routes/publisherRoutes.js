const express=require('express')
const Publiser=require('../models/publisherModel')

const router=express.Router();

router.post('/',async(req,res)=>{
    try {
        const publiser=await Publiser.create(req.body);
        res.status(201).json(publiser)
    } catch (error) {
        res.status(400).json({error:error})
    }
});

router.get('/',async(req,res)=>{
    try {
        const publiser=await Publiser.find();
        res.status(200).json(publiser)
    } catch (error) {
        res.status(500).json({"error":error})
    }
})

router.get('/:id',async(req,res)=>{
    console.log("req start")
    console.log(req.params.id)
    try {
        const publiser=await Publiser.findById(req.params.id);
        if(!publiser){
            return res.status(404).json({mesage:"publsher not found"})
        }
    } catch (error) {
        res.json(400).json({error:error})
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const publiser=await Publiser.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(publiser)
    } catch (error) {
        res.status(500).json({error:error})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        await Publiser.findByIdAndDelete(req.params.id)
        res.json({message:'publisher delete'})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports=router