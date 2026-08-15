const findTheOldest = function(peopleInfo) {
  peopleInfo.sort((a, b) => {
    const aDeathYear = a.yearOfDeath || (new Date()).getFullYear();
    const bDeathYear = b.yearOfDeath || (new Date()).getFullYear();
    const aAge = aDeathYear - a.yearOfBirth;
    const bAge = bDeathYear - b.yearOfBirth;
    return bAge - aAge;
  });
  return peopleInfo[0];
};

module.exports = findTheOldest;