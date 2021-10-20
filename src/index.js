import express from 'express';
import parseRes from './core/parseRes';
import server from './core/server';

const app = express();

app.disable('x-powered-by'); //Disable Express Signature

parseRes(app);

server(app);
