export const sliceArrayForPagenation = (array: any[], Currentpage: number, limit: number) => {
  const slicedArray = array.slice(limit * (Currentpage - 1), limit * (Currentpage - 1) + limit);
  return slicedArray;
};
