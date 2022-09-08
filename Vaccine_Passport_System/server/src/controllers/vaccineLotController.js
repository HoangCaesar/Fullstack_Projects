const { VaccineLot, UserVaccine } = require('../models');

exports.create = async (req, res) => {
    try {
        const newVaccineLot = new VaccineLot({
            vaccine: req.body.vaccineId,
            name: req.body.name,
            quantity: req.body.quantity,
            vaccinated: 0,
        })
        const savedVaccineLot = await newVaccineLot.save();
        res.status(201).json(savedVaccineLot);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getAll = async (req, res) => {
    try {
        const list = await VaccineLot.find({}).populate('vaccine').sort({ createdAt: -1 });
        res.status(200).json(list);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getOne = async (req, res) => {
    try {
        const vaccineLot = await VaccineLot.findById(req.params.id).populate('vaccine');
        res.status(200).json(vaccineLot);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const vaccineLot = await VaccineLot.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $set: req.body
            }
        )
        res.status(200).json(vaccineLot);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        await UserVaccine.deleteMany({vaccineLot: id});
        await VaccineLot.findByIdAndDelete(id)
        res.status(200).json('Deleted');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}