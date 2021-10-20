import Base from '../Model';

const baseCreate = async (req, res) => {
    const base = new Base({
        name: 'test',
    });

    try {
        await base.save();

        res.status(201).send(base);
    } catch (err) {
        res.status(500).send(err);
    }
};

export default baseCreate;
