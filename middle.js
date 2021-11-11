const middle = (list) => {
  let listLength = list.length;
  let isEven = (listLength % 2 === 0);
  let toReturn = [list[((listLength/2)) - 1], list[(listLength/2)]];
  
  return (listLength < 3 ? [] : isEven ? toReturn : [list[Math.floor(listLength/2)]]);

};

module.exports = middle;

