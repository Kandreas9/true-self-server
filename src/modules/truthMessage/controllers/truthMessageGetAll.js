import TruthMessage from '../Model';

const truthMessageGetAll = async (req, res) => {
    try {
        const truthMessages = await TruthMessage.find();

        if (truthMessages.length < 1) {
            return res.status(404).send({ error: 'Truth Messages not found' });
        }

        res.status(200).send(truthMessages);
    } catch (err) {
        res.status(500).send(err);
    }
};

export default truthMessageGetAll;
