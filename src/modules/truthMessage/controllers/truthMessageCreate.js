import TruthMessage from '../Model';

const truthMessageCreate = async (req, res) => {
    const truthMessage = new TruthMessage(req.body);

    try {
        await truthMessage.save();

        res.status(201).send(truthMessage);
    } catch (err) {
        res.status(500).send(err);
    }
};

export default truthMessageCreate;
