export const sliceArrayForPagenation = (array: any[], Currentpage: number, limit: number) => {
  const beginIndex = limit * (Currentpage - 1);
  const endIndex = beginIndex + limit;
  const slicedArray = array.slice(beginIndex, endIndex);
  return slicedArray;
};
