const express = require("express")
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyPasrser = require("body-parser");
const db = require('./models');

class App{

    constructor(){
        this.app = express();
        
        // db 접속
        this.dbConnection();

        //set view engien 
        this.setViewEngine();

        //set Middleware
        this.setMiddleWare();

        //add static directory
        this.setStatic();

        //local variables
        this.setLocals();

        //routes
        this.getRouting();

        // 404 handling
        this.status404();

        //error
        this.errorHandler();


    }

    dbConnection(){
        // DB authentication
        db.sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .then(() => {
            console.log('DB Sync complete.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    
    setMiddleWare(){

        //set Middleware
        this.app.use(logger('dev'));
        this.app.use(bodyPasrser.json());
        this.app.use(bodyPasrser.urlencoded({ extended: false }));

    }

    setViewEngine(){

        nunjucks.configure('public/template',{
            autoescape : true,
            express : this.app
        });

    }

    setStatic(){

        this.app.use('/uploads', express.static('uploads'));
        this.app.use(express.static('public'));
    }

    setLocals(){

        //template variabels
        this.app.use((req,res,next)=>{
            this.app.locals.isLogin = true;
            this.app.locals.req_path = req.path;
            next();
        })

    }

    getRouting(){
        this.app.use(require('./controllers'))

    }

    status404(){
        this.app.use((req,res,_)=>{
            res.status(404).render('common/404.html')
        });

    }

    errorHandler(){
        this.app.use((err,req,res,_)=>{
            res.status(500).render('common/500.html')
        })
    }
}

module.exports = new App().app;