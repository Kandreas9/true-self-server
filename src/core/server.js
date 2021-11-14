import { createServer } from 'http';
import { Server } from 'socket.io';

const port = process.env.PORT || 3000;

console.log(process.env.PORT);

/*---Start Server---*/
const server = (app) => {
    const httpServer = createServer(app);

    const io = new Server(httpServer, {
        cors: {
            origin: '*',
        },
    });

    io.on('connection', (socket) => {
        console.log('User Connected');

        socket.on('truth', (truth) => {
            io.emit('truth', truth);
        });

        socket.on('disconnect', (reason) => {
            console.log('User Disconnected', reason);
        });
    });

    httpServer.listen(port, () => {
        console.log(`===Server is up on port ${port}===`);
    });
};

export default server;
