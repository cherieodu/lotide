const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  return results;
};


module.exports = countOnly;
