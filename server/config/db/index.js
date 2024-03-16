const mongoose = require("mongoose");

function connect() {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Website")
        console.log("successfully");
    } catch (error) {
        console.log("fail");
    }
    
}
module.exports ={connect};