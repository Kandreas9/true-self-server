import baseRouter from '../modules/base/Router';
import truthMessageRouter from '../modules/truthMessage/Router';

const routes = (app) => {
    app.use('/base', baseRouter);
    app.use('/truthMessage', truthMessageRouter);
};

export default routes;
