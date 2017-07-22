import { createSelector } from 'reselect';


export function getItems(state) {
  return state.fridge;
}

export function getFridgeFilter(state) {
  return getItems(state).filter;
}

export function getFridgeList(state) {
  return getItems(state).items;
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleItems = createSelector(
  getFridgeFilter,
  getFridgeList,
  (filter, fridgeList) => {
    switch (filter) {
      case 'active':
        return fridgeList.filter(item => !item.completed);

      case 'completed':
        return fridgeList.filter(item => item.completed);

      default:
        return fridgeList;
    }
  }
);
