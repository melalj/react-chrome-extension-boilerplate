export const SET_LOADING = 'SET_LOADING';
export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading,
  };
}

export const UPDATE_DATASET = 'UPDATE_DATASET';
export function updateDataset(dataset) {
  return {
    type: UPDATE_DATASET,
    dataset,
  };
}

export const UPDATE_TAB = 'UPDATE_TAB';
export function updateTab(tabIndex) {
  return {
    type: UPDATE_TAB,
    tabIndex,
  };
}

export const UPDATE_CURRENT_URL = 'UPDATE_CURRENT_URL';
export function updateCurrentUrl(currentUrl) {
  return {
    type: UPDATE_CURRENT_URL,
    currentUrl,
  };
}
