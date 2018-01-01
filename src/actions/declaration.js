export const toggleMainCategory = mainCategory => (dispatch, getState) => {
  const state = getState();
  if (
    state.declaration.getIn(['settings', 'mainCategories']).has(mainCategory)
  ) {
    dispatch({ type: 'REMOVE_MAIN_CATEGORY', mainCategory });
  } else {
    dispatch({ type: 'ADD_MAIN_CATEGORY', mainCategory });
  }
};
