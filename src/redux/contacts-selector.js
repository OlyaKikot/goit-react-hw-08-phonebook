import { createSelector } from "reselect";
export const getValueFilter = (state) => state.contacts.filter;
export const getItems = (state) => state.contacts.items;
export const getIsLoading = (state) => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getItems, getValueFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
