require('./server/config/config');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const base64_arraybuffer = require('base64-arraybuffer')
var cors=require('cors');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
const fs =  require('fs')

const {ObjectID} = require('mongodb')
const {mongoose} = require('./server/db/mongoose');
const {User} = require('./server/models/user');
const {Room} = require('./server/models/room');
const  port = process.env.PORT || 3000 ;
const  {authenticate} = require('./server/middleware/authenticate')

let app =  express();
app.use(bodyParser.json());
app.use(cors({origin:true,credentials: true,allowedHeaders:['Content-Type','multipart/form-data' , 'Authorization','x-auth'],exposedHeaders:['Content-Type','multipart/form-data' , 'Authorization','x-auth']}));
app.post('/rooms',upload.any(),(req,res)=>{
    let body =  _.pick(req.body, ['title','description','stars','reviewCount',
        'rate','oldPrice','newPrice','street','capacity','favorite','size','_creator','equipment','availableFrom','availableTo','city']);
    var room = new Room(body);
    console.log('post')
    console.log(body)

    room.mainImage.data = fs.readFileSync(req.files[0].path)
    room.mainImage.contentType = 'image/png';
    room.mainImage.path = req.files[0].path;

    room.save().then((doc)=>{
            res.send(doc)
        },(e)=>{
            res.status(400).send(e)
        });;

    // // let body =  _.pick(req.body, ['title','description','mainImage','stars','reviewCount',
    // //     'rate','oldPrice','newPrice','street','capacity','favorite','size','_creator','equipment','availableFrom','availableTo','city']);
    // console.log(req.files)
    // console.log(req.body)
    // // let room = new Room(body);
    // // room.save().then((doc)=>{
    // //     res.send(doc)
    // // },(e)=>{
    // //     res.status(400).send(e)
    // // });
})

app.use('/', express.static('public'))
app.post('/searchRooms',(req,res)=>{
    let body=_.pick(req.body, ['city','availableTo','availableFrom','capacity']);
    console.log('search')
    if (body.capacity === 'any')
        body.capacity = 0
    console.log(body)
    Room.find()
        .where('city').equals(body.city)
        .where('availableFrom').lte(body.availableFrom)
        .where('availableTo').gte(body.availableTo)
        .where('capacity').gte(body.capacity)
        .then((rooms)=>{
        // rooms.mainImage = base64_arraybuffer.encode(rooms[0].mainImage.data))

        res.send({
            rooms,

        })
    },(e)=>{
        res.status(400).send(e)

    })
});
app.get('/rooms/:id',authenticate,(req,res)=>{
    let id = req.params.id;
    if (!ObjectID.isValid(id)){
         return res.status(404).send();
    }
    Room.findOne({
        _id:id,
        _creator:req.user._id
    })
        .then((room)=>{
        if(!room){
             return res.status(404).send()
        }
        res.send( {room})
        })
        .catch((e)=>{
            res.status(400).send(e)
        })
})
app.delete('/rooms/:id',authenticate,(req,res)=>{
    let id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Room.findOneAndRemove({
        _id:id,
        _creator:req.user._creator
    })
        .then((room)=>{
            if(!room){
                return res.status(404).send()
            }
            res.send( {room})
        })
        .catch((e)=>{
            res.status(400).send(e)
        })
});
app.patch('/rooms/:id',authenticate ,(req,res)=>{
    let id = req.params.id;
    let body =  _.pick(req.body, ['text','completed']);
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    if (body.completed && _.isBoolean(body.completed)   ){
        body.completedAt = new Date().getTime()
    }
    else{
        body.completed= false
        body.completedAt = null
    }


    Room.findOneAndUpdate({_id:id,_creator:req.user._creator},{$set:body},{new:true})
        .then((room)=>{
            if(!room){
                return res.status(404).send()
            }
            res.send( {room})
        })
        .catch((e)=>{
            res.status(400).send(e)
        })
});

app.post('/users/signup',(req,res)=>{
    let body =  _.pick(req.body, ['email','password','username']);

    let user = new User(body);
    user.save()
        .then((user)=>{
        return user.generateAuthToken()
        })
        .then((token)=>{
            res.header('x-auth', token ).send(user)
        })
        .catch((e)=>{
        res.status(400).send(e)

    });
});

app.get('/users/me',authenticate,(req,res)=>{
    res.send(req.user)
});
app.listen( port , ()=>{
    console.log(`server is up on ${port}`);
});

app.post('/users/login',(req,res)=>{
    let body =  _.pick(req.body, ['email','password']);
    User.findByCredentials(body.email,body.password).then((user)=> {
        return user.generateAuthToken()
            .then((token) => {
                res.header('x-auth', token).send(user)
            }).catch((e) => {
                res.status(400).send();
            })
    })
})
app.delete('/users/me/token',authenticate,(req,res)=>{
    req.user.removeToken(req.token).then(()=>{
        res.status(200).send()
    }).catch(()=>{
        res.status(400).send()
    })

})
module.exports = {app};