const express = require("express");
const route = express.Router();
const ProductTypeModel = require("../models/ProductType")

//  get all
route.get("",(req,res) =>{
    ProductTypeModel.find().select('-_id')
    .then( data =>{
        const jsonData = {
            producttypes:data
            };
        res.json(jsonData)
    })
    .catch(err =>{
        res.json("error");
    })
})
// get plant
route.get("/plant",(req,res) =>{
    ProductTypeModel.find({maDanhMuc:"PL71309576"}).select('-_id')
    .then( data =>{
        const jsonData = {
            producttypes:data
            };
        res.json(jsonData)
    })
    .catch(err =>{
        res.json("error");
    })
})
// get pot
route.get("/pot",(req,res) =>{
    ProductTypeModel.find({maDanhMuc:"PO67156722"}).select('-_id')
    .then( data =>{
        const jsonData = {
            producttypes:data
            };
        res.json(jsonData)
    })
    .catch(err =>{
        res.json("error");
    })
})


module.exports = route;