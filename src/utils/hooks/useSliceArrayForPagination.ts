export const sliceArrayForPagenation = (array: any[], Currentpage: number) => {
  const slicedArray = array.slice(20 * (Currentpage - 1), 20 * (Currentpage - 1) + 20);
  return slicedArray;
};
