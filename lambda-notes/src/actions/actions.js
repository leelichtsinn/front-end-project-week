export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    instance.get('/get/all')
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: 'No notes found'
        });
      });
  }
}

export const updateNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING });

  }
}
