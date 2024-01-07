import express from "express";
import morgan from "morgan";
import cors from 'cors';
import {config} from 'dotenv';
import router from "./router/route.js";

// Import connection file
import connect from "./database/conn.js";

const app = express()

const corsOptions = {
    origin: 'https://mathped.vercel.app', // replace with your allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204,
  };

// app middlewares
app.use(cors(corsOptions));
app.use(morgan('tiny')); 
app.use(express.json());
config();

// application port
const port = process.env.PORT || 8080;

// routes
app.use('/api', router)


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

// start server only when we have valid connection
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server")
    }
}).catch(error => {
    console.log("Invalid Database Connection")
})

module.exports = app;