const stringToColor = (string: string | null) => {
    console.log(string);
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < (string ? string.length : 5); i += 1) {
        hash = string ? string.charCodeAt(i) + ((hash << 5) - hash) : 1;
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
};

const stringAvatar = (name: string | null) => {
    return {
        sx: {
            margin: "10px 10px",
            bgcolor: stringToColor(name),
            width: 28,
            height: 28,
        },
        children: `${name?.split('')[0][0].toUpperCase()}`,
    };
};

export default stringAvatar;
