const without = (source, itemsToRemove) => {
  let refined = [...source];
  for (let item of itemsToRemove) {
    let index = refined.indexOf(item);
    while (index > -1) {
      refined.splice(index, 1);
      index = refined.indexOf(item);
    }
  } return refined;
};



module.exports = without;