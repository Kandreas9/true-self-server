import TruthMessage from '../Model';

const truthMessageDeleteById = async (req, res) => {
    const id = req.params.id;

    try {
        const doc = await TruthMessage.deleteOne({ _id: id });

        if (!doc.deletedCount) {
            return res.status(404).send({ error: 'Truth Message not found' });
        }

        res.status(200).send({ message: 'Truth Message Deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};

export default truthMessageDeleteById;
