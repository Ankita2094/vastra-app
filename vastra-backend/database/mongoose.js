const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://tiwariank:Anki@2029@cluster0.tadby.mongodb.net/Catalog?retryWrites=true&w=majority/Catalog', { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify : false})
.then(() => console.log("Db Connected")).catch((error) => console.log(error));



module.exports = mongoose;