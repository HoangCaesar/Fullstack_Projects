const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { User, UserVaccine, UserPlace, VaccineLot, Vaccine, Place } = require('../models');

exports.create = async (req, res) => {
    const {
        idNumber,
        phoneNumber
    } = req.body;

    try {
        let user = await User.findOne({ phoneNumber });
        if (user) return res.status(403).json('Phone number is already used for another account');

        user = await User.findOne({ idNumber });
        if (user) return res.status(403).json('ID number is already used for another account');

        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        const token = jwt.sign({
            id: savedUser._id
        }, process.env.TOKEN_SECRET_KEY);

        res.status(201).json({
            user: savedUser,
            token
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getAll = async (req, res) => {
    try {
        const list = await User.find({}).sort({ createdAt: -1 });

        for (const user of list) {
            const vaccine = await UserVaccine.find({
                user: user._id
            }).sort({ createdAt: -1 });
            user._doc.vaccine = vaccine;
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
        // const id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
        const user = await User.findById(req.params.id);

        const userVaccine = await UserVaccine.find({
            user: req.params.id
        }).populate('vaccine').populate('vaccineLot').sort({ createdAt: -1 });

        const userPlace = await UserPlace.find({
            user: req.params.id
        }).populate('place').sort({ createdAt: -1 });

        user._doc.vaccinated = userVaccine;
        user._doc.placeVisited = userPlace;

        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    const {
        idNumber,
        phoneNumber,
    } = req.body;

    try {
        let user = await User.findOne({ phoneNumber });
        if (user && user._id.toString() !== req.params.id) return res.status(403).json('Phone number is already used for another account');

        user = await User.findOne({ idNumber });
        if (user && user._id.toString() !== req.params.id) return res.status(403).json('ID number is already used for another account');

        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }
        )
        res.status(200).json(updateUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await UserVaccine.deleteMany({ user: id });
        await UserPlace.deleteMany({ user: id });
        await User.findByIdAndDelete(id)

        res.status(200).json('Deleted')
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// add vaccinated to user
exports.vaccinated = async (req, res) => {
    try {
        const {
            userId,
            vaccineId,
            vaccineLotId
        } = req.body;
        const newUserVaccine = new UserVaccine({
            vaccine: vaccineId,
            vaccineLot: vaccineLotId,
            user: userId
        });
        const savedUserVaccine = await newUserVaccine.save();

        await VaccineLot.findOneAndUpdate(
            {
                _id: vaccineLotId
            },
            {
                $inc: { vaccinated: 1 }
            }
        );

        savedUserVaccine._doc.vaccine = await Vaccine.findById(vaccineId);
        savedUserVaccine._doc.vaccineLot = await VaccineLot.findById(vaccineLotId);

        res.status(201).json(savedUserVaccine);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// get places of user     
exports.getAllPlace = async (req, res) => {
    try {
        const list = await Place.find({
            creator: req.params.userId
        });
        res.status(200).json(list);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// user: check in place  
exports.checkinPlace = async (req, res) => {
    try {
        const newVisit = await UserPlace({
            user: req.user._id,
            place: req.body.placeId
        });
        const savedUserPlace = await newVisit.save();
        res.status(201).json(savedUserPlace);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// get place that user checked in         
exports.placeVisited = async (req, res) => {
    try {
        const list = await UserPlace.find({
            user: req.params.userId
        }).populate('place');

        res.status(201).json(list);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}