function getCleanArray({ res }: any) {
  let cleanArray: any[] = [];
  res.types.map((type: any) => {
    cleanArray.push(type.type.name);
  });
  return cleanArray;
}

export default getCleanArray;
