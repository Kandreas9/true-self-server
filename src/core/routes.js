import baseRouter from '../modules/base/Router';

const routes = (app) => {
    app.use('/base', baseRouter);
};

export default routes;
