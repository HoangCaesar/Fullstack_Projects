const sortList = (sort, order, list) => {
    if (sort === 'Duration (sec') {
        return list.sort((a, b) => {
            if (order === 'asc') {
                return a[sort][')'] - b[sort][')'];
            }
            return b[sort][')'] - a[sort][')'];
        });
    }

    return list.sort((a, b) => {
        if (order === 'asc') {
            return a[sort] - b[sort];
        }
        return b[sort] - a[sort];
    });
};

module.exports = sortList;
