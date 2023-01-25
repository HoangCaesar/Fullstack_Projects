// Project import
const {
    May_2021Highlights,
    June_2021Highlights,
    July_2021Highlights,
    May_2021JourneyList,
    June_2021JourneyList,
    July_2021JourneyList,
} = require('../../models');

// ======================================== HIGHLIGHT SERVICE =======================================
const findHighlights = async () => {
    // May
    const highlightsDocumentInMay = await May_2021Highlights.findOne();

    const totalRowsInMay = await May_2021JourneyList.estimatedDocumentCount()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            throw err;
        });

    // Check total number of rows, if it changes => update highlights collection.
    if (highlightsDocumentInMay?.totalRows !== totalRowsInMay) {
        await May_2021Highlights.deleteMany({});
        const totalDurationAndDistanceInMay = await May_2021JourneyList.aggregate([
            {
                $group: {
                    _id: null,
                    totalDuration: {
                        $sum: '$Duration',
                    },
                    totalDistance: {
                        $sum: '$Distance',
                    },
                },
            },
        ])
            .then((result) => {
                return [result[0].totalDuration, result[0].totalDistance];
            })
            .catch((err) => {
                throw err;
            });

        const longestDurationInMay = await May_2021JourneyList.find({})
            .sort({ Duration: -1 })
            .limit(1)
            .then((result) => {
                return result[0].Duration;
            })
            .catch((err) => {
                throw err;
            });

        const longestDistanceInMay = await May_2021JourneyList.find({})
            .sort({ Distance: -1 })
            .limit(1)
            .then((result) => {
                return result[0].Distance;
            })
            .catch((err) => {
                throw err;
            });

        const totalDurationInHoursInMay = Math.round(totalDurationAndDistanceInMay[0] / 3600);
        const totalDistanceInKilometersInMay = Math.round(totalDurationAndDistanceInMay[1] / 1000);
        const averageDurationInMay = Math.round(totalDurationAndDistanceInMay[0] / totalRowsInMay);
        const averageDistanceInMay = Math.round(totalDurationAndDistanceInMay[1] / totalRowsInMay);

        const newHighlightsInMay = new May_2021Highlights({
            totalRows: totalRowsInMay,
            'totalDuration(hours)': totalDurationInHoursInMay,
            'totalDistance(km)': totalDistanceInKilometersInMay,
            longestDuration: longestDurationInMay,
            longestDistance: longestDistanceInMay,
            averageDuration: averageDurationInMay,
            averageDistance: averageDistanceInMay,
        });

        await newHighlightsInMay.save();
    }

    // June
    const highlightsDocumentInJune = await June_2021Highlights.findOne();

    const totalRowsInJune = await June_2021JourneyList.estimatedDocumentCount()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            throw err;
        });

    // Check total number of rows, if it changes => update highlights collection.
    if (highlightsDocumentInJune.totalRows !== totalRowsInJune) {
        await June_2021Highlights.deleteMany({});
        const totalDurationAndDistanceInJune = await June_2021JourneyList.aggregate([
            {
                $group: {
                    _id: null,
                    totalDuration: {
                        $sum: '$Duration',
                    },
                    totalDistance: {
                        $sum: '$Distance',
                    },
                },
            },
        ])
            .then((result) => {
                return [result[0].totalDuration, result[0].totalDistance];
            })
            .catch((err) => {
                throw err;
            });

        const longestDurationInJune = await June_2021JourneyList.find({})
            .sort({ Duration: -1 })
            .limit(1)
            .then((result) => {
                return result[0].Duration;
            })
            .catch((err) => {
                throw err;
            });

        const longestDistanceInJune = await June_2021JourneyList.find({})
            .sort({ Distance: -1 })
            .limit(1)
            .then((result) => {
                return result[0].Distance;
            })
            .catch((err) => {
                throw err;
            });

        const totalDurationInHoursInJune = Math.round(totalDurationAndDistanceInJune[0] / 3600);
        const totalDistanceInKilometersInJune = Math.round(
            totalDurationAndDistanceInJune[1] / 1000
        );
        const averageDurationInJune = Math.round(
            totalDurationAndDistanceInJune[0] / totalRowsInJune
        );
        const averageDistanceInJune = Math.round(
            totalDurationAndDistanceInJune[1] / totalRowsInJune
        );

        const newHighlightsInJune = new June_2021Highlights({
            totalRows: totalRowsInJune,
            'totalDuration(hours)': totalDurationInHoursInJune,
            'totalDistance(km)': totalDistanceInKilometersInJune,
            longestDuration: longestDurationInJune,
            longestDistance: longestDistanceInJune,
            averageDuration: averageDurationInJune,
            averageDistance: averageDistanceInJune,
        });

        await newHighlightsInJune.save();
    }

    // July
    const highlightsDocumentInJuly = await July_2021Highlights.findOne();

    const totalRowsInJuly = await July_2021JourneyList.estimatedDocumentCount()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            throw err;
        });

    // Check total number of rows, if it changes => update highlights collection.
    if (highlightsDocumentInJuly.totalRows !== totalRowsInJuly) {
        await July_2021Highlights.deleteMany({});
        const totalDurationAndDistanceInJuly = await July_2021JourneyList.aggregate([
            {
                $group: {
                    _id: null,
                    totalDuration: {
                        $sum: '$Duration',
                    },
                    totalDistance: {
                        $sum: '$Distance',
                    },
                },
            },
        ])
            .then((result) => {
                return [result[0].totalDuration, result[0].totalDistance];
            })
            .catch((err) => {
                throw err;
            });

        const longestDurationInJuly = await July_2021JourneyList.find({})
            .sort({ Duration: -1 })
            .limit(1)
            .then((result) => {
                return result[0].Duration;
            })
            .catch((err) => {
                throw err;
            });

        const longestDistanceInJuly = await July_2021JourneyList.find({})
            .sort({ Distance: -1 })
            .limit(1)
            .then((result) => {
                return result[0].Distance;
            })
            .catch((err) => {
                throw err;
            });

        const totalDurationInHoursInJuly = Math.round(totalDurationAndDistanceInJuly[0] / 3600);
        const totalDistanceInKilometersInJuly = Math.round(
            totalDurationAndDistanceInJuly[1] / 1000
        );
        const averageDurationInJuly = Math.round(
            totalDurationAndDistanceInJuly[0] / totalRowsInJuly
        );
        const averageDistanceInJuly = Math.round(
            totalDurationAndDistanceInJuly[1] / totalRowsInJuly
        );

        const newHighlightsInJuly = new July_2021Highlights({
            totalRows: totalRowsInJuly,
            'totalDuration(hours)': totalDurationInHoursInJuly,
            'totalDistance(km)': totalDistanceInKilometersInJuly,
            longestDuration: longestDurationInJuly,
            longestDistance: longestDistanceInJuly,
            averageDuration: averageDurationInJuly,
            averageDistance: averageDistanceInJuly,
        });

        await newHighlightsInJuly.save();
    }
};

module.exports = findHighlights;
