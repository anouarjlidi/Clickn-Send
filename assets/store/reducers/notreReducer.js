import {
  CLOSE_MODAL,
  OPEN_MODAL,
  OPEN_MODAL_HOME,
  CLOSE_MODAL_HOME,
  LOAD,
  LOGGED_IN,
  LOGGED_OUT,
  USER_CONNECTED,
} from './localActions';
/**
 * État initial pour le state de l'application
 */
const initialState = {
  data: null,
  modal: false,
  view: '',
  field: '',
  modalHome: false,
  homeView: '',
  loggedIn: false,
  userConnected: false,
};

/**
 * Reducer de l'application
 */
const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case LOAD: {
      return {
        ...currentState,
        data: action.data,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...currentState,
        modal: false,
        view: '',
        field: '',
      };
    }

    case OPEN_MODAL: {
      return {
        ...currentState,
        modal: true,
        view: action.view,
        field: action.field,
      };
    }

    case OPEN_MODAL_HOME: {
      return {
        ...currentState,
        modalHome: true,
        homeView: action.homeView,
      };
    }

    case CLOSE_MODAL_HOME: {
      return {
        ...currentState,
        modalHome: false,
        homeView: '',
      };
    }
    case LOGGED_IN: {
      return {
        ...currentState,
        loggedIn: true,
      };
    }
    case LOGGED_OUT: {
      return {
        ...currentState,
        loggedIn: false,
      };
    }
    case USER_CONNECTED: {
      return {
        ...currentState,
        userConnected: action.values,
      };
    }
    default: return currentState;
  }
};

export default reducer;
