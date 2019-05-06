import {
  FETCH_RESORT_BEGIN,
  FETCH_RESORT_SUCCESS,
  FETCH_RESORT_FAILURE
} from '../../mountainActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH__BEGIN:

      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_RESORT_SUCCESS:

      return {
        ...state,
        loading: false,
        items: action.payload.resort
      };

    case FETCH_RESORT_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:

      return state;
  }
}
