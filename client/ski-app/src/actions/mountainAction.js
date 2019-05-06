export const FETCH_RESORT_BEGIN   = 'FETCH_RESORT_BEGIN';
export const FETCH_RESORT_SUCCESS = 'FETCH_RESORT_SUCCESS';
export const FETCH_RESORT_FAILURE = 'FETCH_RESORT_FAILURE';


function getResort(url) {
  console.log(url);
  return fetch("https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/"+url)

    .then(res => res.json());

}

export function fetchResort(url) {
  console.log(url);
  return dispatch => {
    dispatch(fetchResortBegin());
    return getResort(url)
      .then(json => {
        console.log(json);
        dispatch(fetchResortSuccess(json));

        return json;
      })

      .catch(error =>
        dispatch(fetchResortFailure(error))
      );
  };
}

export const fetchResortBegin = () => ({
  type: FETCH_RESORT_BEGIN
});

export const fetchResortSuccess = resort => ({
  type: FETCH_RESORT_SUCCESS,
  payload: { resort}
});

export const fetchResortFailure = error => ({
  type: FETCH_RESORT_FAILURE,
  payload: { error }
});
