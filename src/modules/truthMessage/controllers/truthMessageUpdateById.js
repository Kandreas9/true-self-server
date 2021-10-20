import TruthMessage from '../Model';

const truthMessageUpdateById = async (req, res) => {
    const id = req.params.id;
    const updates = Object.keys(req.body);

    try {
        const truthMessage = await TruthMessage.findById(id);

        if (!truthMessage) {
            return res.status(404).send({ error: 'Truth Message not found' });
        }

        updates.forEach((update) => (truthMessage[update] = req.body[update]));
        await truthMessage.save();

        res.status(200).send(truthMessage);
    } catch (err) {
        res.status(500).send(err);
    }
};

export default truthMessageUpdateById;
