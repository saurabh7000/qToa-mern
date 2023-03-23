const mongoose = require("mongoose");
const url =
  "mongodb://file-share:password4hard@ac-q9vmwhm-shard-00-00.3s1hr7l.mongodb.net:27017,ac-q9vmwhm-shard-00-01.3s1hr7l.mongodb.net:27017,ac-q9vmwhm-shard-00-02.3s1hr7l.mongodb.net:27017/qtoa-mern?ssl=true&replicaSet=atlas-m6m4uk-shard-0&authSource=admin&retryWrites=true&w=majority";

  module.exports.connect = ()=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log("MongoDB connected successfully");
    }).catch((error) => console.log("Error: ",error));

  }

  //44