import mongoose from 'mongoose';

const mongoConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/true-self-db').catch((err) => console.log(err));

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
};

export default mongoConnection;
