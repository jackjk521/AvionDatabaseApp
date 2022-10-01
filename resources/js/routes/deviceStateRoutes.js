const express = require("express");
const router = express.Router();

// const AvionDB = require("aviondb");
// const IPFS = require("ipfs");
// const ipfs = new IPFS();

router.route("/state").post((req, res) =>{ // works
    const devState = {
        userHash: req.body.userHash,
        topic: req.body.topic,
        devState: req.body.dev_state,
    } 

    try{
        if(devState){   // neeed to fix this for no repetition of emails
            
            const changeState = async () => {
                await ipfs.ready();
            
                const aviondb = await AvionDB.init("StateDB", ipfs); 
            
                const collection = await aviondb.initCollection("statesDev");

                const addState = await collection.insertOne(devState);

            } 

            changeState();

                if({changeState} != null){
                    res.send({
                        success: true, 
                        message: "State added",
                        devInfo: devState
                    })
                }
                else{
                    res.send({
                        success: false, 
                        message: "Error occurred",
                        error: err
                        
                    })
                }
        }

        else{
            res.send({
                success: false, 
                message: "Error occurred",
                error: err
                
            })

        }
    }
    catch(err){
        console.log(err.message);
    }
  
})

module.exports = router;