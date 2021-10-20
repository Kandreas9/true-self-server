import mongoose from 'mongoose';

const Schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: {}, versionKey: false },
);

export default mongoose.model('Base', Schema);
