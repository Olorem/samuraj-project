import { createSelector } from "reselect";


export const getUsers       = state => state.usersPage.users;

export const getFilteredUsers = createSelector(getUsers, users => users.filter( u => true) );

export const getTotalCount  = state => state.usersPage.totalCount;

export const getPageSize    = state => state.usersPage.pageSize;

export const getCurrentPage = state => state.usersPage.currentPage;

export const getIsFetching  = state => state.usersPage.isFetching;

export const getButtonsInProgress = state => state.usersPage.buttonsInProgress;

export const getUser              = state => state.profilePage.user;

export const getIsAuthorized      = state => state.authReducer.isAuthorized;







