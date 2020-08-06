const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const styleCatalog = require('./database/models/styleCatalog');
const userdb = require('./database/models/user');
// const styleCat = require('./database/models/styleCatalog');

app.use(express.json());
app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With", "Content-Type, Accept");
    next();
});


var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

    
// // List : create a list,Update,ReadOne,ReadAll,Delete
// // Task : create a task,Update,ReadOne,ReadAll,Delete

// // URL Endpoints
// // app.get('/styleCatalog') "http://localhost:3000/styleCatalog" -> [{array of all the list items}]

app.get('/styleCatalog',(req,res) =>{
    styleCatalog.find({})
    .then(styleCat => res.send(styleCat))
    .catch((error)=> console.log(error));
});

app.post('/styleCatalog',(req,res)=>{ 
    
    (new styleCatalog({'wear_type': req.body.wear_type, 'color': req.body.color, 'price' : req.body.price, 'imgId': req.body.imgId, 'titleName': req.body.titleName, 'sizeCount': req.body.sizeCount}))
.save()
.then((styleCat) => res.send(styleCat))
.catch((error)=> console.log(error));
});

app.get('/styleCatalog/:wear_type',(req,res) =>{
    styleCatalog.find({wear_type :req.params.wear_type})
    .then((styleCat) => res.send(styleCat))
    .catch((error)=> console.log(error));
});


app.post('/user',(req,res)=>{ 
    
    (new userdb({'emailid': req.body.emailid, 'password': req.body.password, 'wishlist' : req.body.wishlist, 'cart': req.body.cart}))
.save()
.then((user) => res.send(user))
.catch((error)=> console.log(error));
});

// app.patch('/lists/:listId',(req,res) =>{
//     List.findOneAndUpdate({'_id' : req.params.listId},{$set: req.body })
//     .then((list) => res.send(list))
//     .catch((error)=> console.log(error));
// });

// app.delete('/lists/:listId',(req,res) =>{

//     const deleteTasks = (list) =>{
//         Task.deleteMany({_listId: list._id})
//         .then(()=> list)
//         .catch((error)=> console.log(error));
//     };
//    const list =  List.findByIdAndDelete(req.params.listId)
//     .then((list) => res.send(deleteTasks(list)))
//     .catch((error)=> console.log(error));

//     // res.send(list);
// });

// // for Tasks,as each task will need list Id : 
// // http://localhost:3000/lists/:listId/tasks/taskId

// app.get('/lists/:listId/tasks', (req,res) =>{
//     Task.find({_listId : req.params.listId})
//     .then((tasks) => res.send(tasks))
//     .catch((error)=> console.log(error));
// });


// app.post('/lists/:listId/tasks', (req,res) =>{
//     (new Task ({'title': req.body.title, '_listId' : req.params.listId})).save()
//     .then((task) => res.send(task))
//     .catch((error)=> console.log(error));
// });

// app.get('/lists/:listId/tasks/:taskId', (req,res) =>{
//     Task.find({_listId : req.params.listId, _id: req.params.taskId})
//     .then((task) => res.send(task))
//     .catch((error)=> console.log(error));
// });

// app.patch('/lists/:listId/tasks/:taskId',(req,res) =>{
//     Task.findOneAndUpdate({_listId : req.params.listId, _id: req.params.taskId},{$set: req.body })
//     .then((task) => res.send(task))
//     .catch((error)=> console.log(error));
// });

// app.delete('/lists/:listId/tasks/:taskId',(req,res) =>{
//     Task.findOneAndDelete({_listId : req.params.listId, _id: req.params.taskId})
//     .then((task) => res.send(task))
//     .catch((error)=> console.log(error));
// });







//app.listen(3000, () => console.log("Server Connected on port 3000"));
var server = app.listen(process.env.PORT || 3000);
var port = server.address().port;
console.log("App now running on port", port);
