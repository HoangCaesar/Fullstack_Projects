// ==============================|| COMMON UTILS ||============================== //

const capitalizeString = (str: string) => {
    if (!str) {
        return '';
    } else {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    }
};

const getDistanceColor = (distance: number): string => {
    if (distance >= 2500) {
        return `blue`;
    } else if (distance < 2500 && distance > 1500) {
        return `green`;
    } else if (distance < 1500 && distance > 500) {
        return `orange`;
    } else {
        return `red`;
    }
};

const getDurationColor = (duration: number): string => {
    if (duration >= 1000) {
        return `blue`;
    } else if (duration < 1000 && duration > 800) {
        return `green`;
    } else if (duration < 800 && duration > 500) {
        return `orange`;
    } else {
        return `red`;
    }
};

const getUserName = () => {
    const username = localStorage.getItem('username');
    return username;
};

export { capitalizeString, getDistanceColor, getDurationColor, getUserName };
