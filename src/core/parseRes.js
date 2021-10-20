import express from 'express';

const parseRes = (app) => {
    app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
    app.use(express.json()); //Used to parse JSON bodies
};

export default parseRes;
