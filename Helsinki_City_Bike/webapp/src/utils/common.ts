const capitalizeString = (str: string) => {
    if (!str) {
        return '';
    } else {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    }
};

const getMarkColor = (mark: number): string => {
    if (mark >= 8) {
        return `blue`;
    } else if (mark < 8 && mark > 6.5) {
        return `green`;
    } else if (mark < 6.5 && mark > 5) {
        return `orange`;
    } else {
        return `red`;
    }
};

export { capitalizeString, getMarkColor };
