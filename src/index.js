import express from 'express';
import mongoConnection from './core/mongoConnection';
import parseRes from './core/parseRes';
import routes from './core/routes';
import server from './core/server';

const app = express();

app.disable('x-powered-by'); //Disable Express Signature

mongoConnection();
parseRes(app);
routes(app);

server(app);
