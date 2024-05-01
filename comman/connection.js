const mongoose = require('mongoose')
require('dotenv').config();
const Mongo_Url = "mongodb+srv://yugandharselvam:oBMopBiJiP6aFUBu@seaindia.rgzhgce.mongodb.net/"
const Connect = () =>{ 
mongoose.connect(Mongo_Url)
.then(() => {console.log("Mongo DB is connected....");
    
}).catch(() => {console.log("Connection error...");
    
});
}

module.exports = Connect;