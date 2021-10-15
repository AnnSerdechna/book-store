export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArr = (totalPages) => {
  let result = [];
  for (let i = 1; i < totalPages; i++) {
    if (i % 10 !== 0 && i !==1) continue;
    result.push(i);
  }
  return result;
};
