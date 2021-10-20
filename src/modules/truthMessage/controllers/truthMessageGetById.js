import TruthMessage from '../Model';

const truthMessageGetById = async (req, res) => {
    const id = req.params.id;

    try {
        const truthMessage = await TruthMessage.findById(id);

        if (!truthMessage) {
            return res.status(404).send({ error: 'Truth Message not found' });
        }

        res.status(200).send(truthMessage);
    } catch (err) {
        res.status(500).send(err);
    }
};

export default truthMessageGetById;
