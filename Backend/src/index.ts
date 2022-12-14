import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

export const app = express()

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

let corsOptions;

corsOptions = {
  origin: "*"
}


app.use(cors(corsOptions));
