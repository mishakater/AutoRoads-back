const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const cors = require('cors');


app.use(cors());
app.options('*', cors());



//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const profRoute = require('./routes/profile');
//const vacanRoute = require('./routes/vacan');
const roadProfileRoute = require('./routes/roadProf');


dotenv.config();


//connect to BD
mongoose.connect('mongodb+srv://Misha111:diplom2021@cluster0.tflit.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }, () => console.log('Connected to DB!'));

//Middleware
app.use(express.json());



//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/user', profRoute);
//app.use('/api/vacan', vacanRoute);
app.use('/api/roadProf', roadProfileRoute);



app.listen(3000, () => console.log('Server up and running'));

