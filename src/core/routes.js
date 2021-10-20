import baseRouter from '../modules/base/Router';
import truthMessageRouter from '../modules/truthMessage/Router';

const routes = (app) => {
    app.use('/base', baseRouter);
    app.use('/truth-message', truthMessageRouter);
};

export default routes;
