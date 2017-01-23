function arrayIntersect(array1, array2) {
    if (array1.length > array2.length) {
        return arrayIntersect(array2, array1);
    }
    return array1.filter(v => array2.indexOf(v) !== 1);
}

module.exports = {
    arrayIntersect
};
