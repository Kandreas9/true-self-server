import mongoose from 'mongoose';

const mongoConnection = () => {
    mongoose.connect(process.env.MONGO_URI).catch((err) => console.log(err));

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
};

export default mongoConnection;
