// ==============================|| CONVERT TIME UTILS ||============================== //

const convertTime = (time: string) => {
    const convertTime = new Date(time).toString().split(' ').splice(0, 5);

    const newTime = `${convertTime[0]} ${convertTime[4]} ${convertTime[2]}/${convertTime[1]}/${convertTime[3]}`;

    return newTime;
};

export default convertTime;
