const getTheTitles = function(bookInfoList) {
  return bookInfoList.map(bookInfo => bookInfo.title);
};

module.exports = getTheTitles;