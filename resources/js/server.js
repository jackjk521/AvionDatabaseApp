const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require('dotenv').config(); 

//Aviondb
// const AvionDB = require("aviondb");
// const IPFS = require("ipfs");
// const ipfs = new IPFS();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());

// init a db and a collection 
const dbInit = async () => {
    await ipfs.ready();

    const aviondb = await AvionDB.init("DatabaseName", ipfs, { path: "./.aviondb", }); 

    const collection = await aviondb.initCollection("statesDev");
} 

//require state routes
app.use("/", require("../js/routes/deviceStateRoutes"));

//listen to port and creates the DB if it is successful
app.listen(3005, function(err){
    if(!err){
        dbInit();
        console.log("DB created and listening for requesta at port", 3005);
    }
    else{
        console.log(err);
    }
})