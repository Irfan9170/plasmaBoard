require('dotenv').config();
const  express = require('express')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejs = require("ejs");
const app = express()
const port = 3000||process.env

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true,useUnifiedTopology: true});

const donorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number
    },
    pincode:{
        type:Number,
        
    },
    blood:{
        type:String
    }
})

const Donor = mongoose.model('Donor',donorSchema);

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number
    },
    pincode:{
        type:Number,
        
    },
    blood:{
        type:String
    }
})

const Patient = mongoose.model('Patient',patientSchema);


const volunteerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number
    },
    pincode:{
        type:Number,
        
    },
    email:{
        type:String
    },
    dep:{
        type:String
    }
})

const Volunteer = mongoose.model('Volunteer',volunteerSchema);

app.get('/', (req, res) => {
    res.render("home");
})
app.get('/donor',(req,res)=>{
    res.render("donor");
})
app.post('/donor',(req,res)=>{
    
    const donor = new Donor({
        name:req.body.name,
        mobile:req.body.mobile,
        pincode:req.body.pincode,
        blood:req.body.blood
    })
    donor.save();
    res.redirect("/")
})
app.get('/patient',(req,res)=>{
    res.render("patient");
})
app.post('/patient',(req,res)=>{
    const newPatient = new Patient({
        name:req.body.name,
        mobile:req.body.mobile,
        pincode:req.body.pincode,
        blood:req.body.blood
    })
    newPatient.save();
    res.redirect("/")
})
app.get('/volunteer',(req,res)=>{
    res.render("volunteer");
})
app.post('/volunteer',(req,res)=>{
    const newVolunteer = new Volunteer({
        name:req.body.name,
        mobile:req.body.mobile,
        pincode:req.body.pincode,
        email:req.body.email,
        dep:req.body.dep
    })
    newVolunteer.save();
    res.redirect("/")
})

app.listen(port, () => console.log(`Example app listening on ${port} port!`))