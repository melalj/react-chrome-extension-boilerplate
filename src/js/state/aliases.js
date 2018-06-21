import axios from 'axios';
import { SAMPLE_API } from '../constants';
import secrets from 'secrets'; // eslint-disable-line

import { setLoading, updateDataset } from './actions';

export const list = {};

export const LOAD_DATASET = 'LOAD_DATASET';
list[LOAD_DATASET] = ({ payload }) => (dispatch) => {
  dispatch(setLoading(true));
  return axios.get(`${SAMPLE_API}?apiKey=${secrets.apiKey}&since=${payload.since}`)
    .then((res) => {
      dispatch(setLoading(false));
      dispatch(updateDataset(res.data));
    });
};
