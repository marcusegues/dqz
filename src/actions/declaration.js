export const toggleMainCategory = mainCategory => {
  return (dispatch, getState) => {
    const state = getState();
    if (
      state.declaration.getIn(['settings', 'mainCategories']).has(mainCategory)
    ) {
      dispatch({ type: 'DECLARATION_REMOVE_MAIN_CATEGORY', mainCategory });
    } else {
      dispatch({ type: 'DECLARATION_ADD_MAIN_CATEGORY', mainCategory });
    }
  };
};
