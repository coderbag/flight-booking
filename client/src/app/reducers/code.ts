import { Code } from '../models/code';
import * as code from '../actions/code';

export interface State {
  loading: boolean;
  loaded: boolean;
  codes: Code[];
};

export const initialState: State = {
  codes: null,
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: code.Actions): State {
  switch (action.type) {
    case code.LOAD: {
      return {
        codes: null,
        loaded: false,
        loading: true
      };
    }

    case code.LOAD_SUCCESS: {
      return {
        codes: action.payload,
        loaded: true,
        loading: false
      };
    }

    case code.DELETE_SUCCESS: {
      const newCodes = [...state.codes];
      newCodes.splice(newCodes.indexOf(action.payload), 1);
      
      return {
        codes: newCodes,
        loaded: state.loaded,
        loading: state.loading
      }
    }

    default: {
      return state;
    }
  }
}

export const getCodes = (state: State) => state.codes;
export const getCodesLoaded = (state: State) => state.loaded;
export const getCodesLoading = (state: State) => state.loading;
