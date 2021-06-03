require('dotenv').config();
const  express = require('express')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejs = require("ejs");
const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true,useUnifiedTopology: true});


app.use('/',require('./routes/home.js'))
app.use('/donor',require('./routes/donor.js'));
app.use('/patient',require('./routes/patient.js'))
app.use('/volunteer',require('./routes/volunteer.js'))
app.use('/resources',require('./routes/resource.js'))
app.use('/search',require('./routes/search.js'))
app.use('/resource',require('./routes/resourceFind.js'))
app.use('/city',require('./routes/cityFind.js'));


app.get('/disclaimer',(req,res)=>{
    res.render("disclaimer")
})
app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on ${port} port!`))