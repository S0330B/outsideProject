function convertDataToSectionMap(data) {
  return data.reduce((acc, item) => {
    acc[item.code] = { ...item };
    delete acc[item.code].code; // Optional: Remove 'code' key from the nested object
    return acc;
  }, {});
}

module.exports = {
  convertDataToSectionMap,
};
