export const logError = (error: Error) => {
  console.warn(`[Error][BookAPI]: Error while fetching books`, error);
};
