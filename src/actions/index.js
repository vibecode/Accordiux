export const selectSection = (sectionId) => {
  return {
    type: 'select_section',
    payload: sectionId
  };
};
