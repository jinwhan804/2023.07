const express = require('express');
const session = require('express-session');
const dot = require('dotenv').config();
const cors = require('cors');
const {sequelize} = require('./models');

const app = express();

const signUpRouter = require('./routers/signUp');
const loginRouter = require('./routers/login');

app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true
}))

app.use(express.urlencoded({extended : false}));

app.use(express.json());

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}))

sequelize.sync({force : false}).then(()=>{
    console.log('연결 성공');
}).catch((err)=>{
    console.log(err);
})

app.use('/signup',signUpRouter);
app.use('/login',loginRouter);

app.listen(5000,()=>{
    console.log('backend server on');
})