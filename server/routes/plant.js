const express = require("express");
const route = express.Router();
const PlantModel = require("../models/Products")
//  get all
route.get("",(req,res) =>{
    PlantModel.find().select('-_id')
    .then( data =>{
        data = data.filter(item => item["maLoai"] !== "CM56931108");
        data = data.filter(item => item["maLoai"] !== "PS59670186");
        data = data.filter(item => item["maLoai"] !== "TE57322385");
        const jsonData = {
            plants:data
            };
        res.json(jsonData)    
    })
    .catch(err =>{
        res.json("error");
    })

})
// get by type /search?ml=
route.get("/search",(req,res) =>{
    if(req.query.ml)
    {
    PlantModel.find({maLoai:req.query.ml}).select('-_id')
    .then( data =>{
        const jsonData = {
            plants:data
            };
        res.json(jsonData)        
    })
    .catch(err =>{
        res.json("error");
    })
    }

})
// get by id
route.get("/search/:id",(req,res) =>{
    const id = req.params.id;
    PlantModel.find({maSP:id}).select('-_id')
    .then( data =>{
        const jsonData = {
            plant:data
            };
        res.json(jsonData)        
    })
    .catch(err =>{
        res.json("error");
    })

})
module.exports = route;