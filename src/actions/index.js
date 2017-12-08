import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES
} from '../action-types/index';

export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}
export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}

export function searchAsyncEntities(query) {
  return (dispatch) => {
    // fetch().then(()=>)
    // XHR
    // trae
    setTimeout(()=> {
      dispatch(searchEntities(query))
    }, 5000)
  }

}

