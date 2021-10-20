import mongoose from 'mongoose';

const Schema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: {}, versionKey: false },
);

export default mongoose.model('TruthMessage', Schema);
