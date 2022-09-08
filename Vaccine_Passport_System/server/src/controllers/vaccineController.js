const { Vaccine, VaccineLot, UserVaccine } = require('../models');

exports.create = async (req, res) => {
    try {

        const newVaccine = new Vaccine({
            name: req.body.name,
        });

        const savedVaccine = await newVaccine.save();
        savedVaccine._doc.quantity = 0;
        savedVaccine._doc.vaccinated = 0;
        savedVaccine._doc.vaccineLot = [];

        res.status(201).json(savedVaccine);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getAll = async (req, res) => {
    try {

        const list = await Vaccine.find({}).sort({ createdAt: -1 });
        for (const vaccine of list) {
            const vaccineLots = await VaccineLot.find({ vaccine: vaccine._id });
            vaccine._doc.quantity = vaccineLots.reduce(
                (total, item) => total + Number(item.quantity),
                0
            );
            vaccine._doc.vaccinated = vaccineLots.reduce(
                (total, item) => total + Number(item.vaccinated),
                0
            );
            vaccine._doc.vaccineLots = vaccineLots;
        }

        res.status(200).json(list);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getOne = async (req, res) => {
    try {

        const vaccine = await Vaccine.findById(req.params.id);
        const vaccineLots = await VaccineLot.find({ vaccine: vaccine._id });

        vaccine._doc.quantity = vaccineLots.reduce(
            (total, item) => total + Number(item.quantity),
            0
        );
        vaccine._doc.vaccinated = vaccineLots.reduce(
            (total, item) => total + Number(item.vaccinated),
            0
        );
        vaccine._doc.vaccineLots = vaccineLots;

        res.status(200).json(vaccine);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {

        const vaccine = await Vaccine.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                $set: req.body
            }
        );

        res.status(200).json(vaccine);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await VaccineLot.deleteMany({vaccine: id});
        await UserVaccine.deleteMany({vaccine: id});
        await Vaccine.findByIdAndDelete(id);

        res.status(200).json("Deleted");
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}