const express = require("express");
const route = express.Router();
const CategoryModel = require("../models/Category")

//  get all
route.get("",(req,res) =>{
    CategoryModel.find().select('-_id')
    .then( data =>{
        const jsonData = {
            categories:data
            };
        res.json(jsonData)
    })
    .catch(err =>{
        res.json("error");
    })
})
//  get id /search
route.get("/search",(req,res) =>{
    if(req.query.dm)
    CategoryModel.find({maDanhMuc: req.query.dm}).select('-_id')
    .then( data =>{
        const jsonData = {
            category:data
            };
        res.json(jsonData)
    })
    .catch(err =>{
        res.json("error");
    })

})

module.exports = route;