import reducer from '../reducers';


const ADD_FEATURE = 'ADD_FEATURE';
const REMOVE_FEATURE = 'REMOVE_FEATURE';


const addFeature = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
}

const removeFeature = (feature) => {
  return {
    type: REMOVE_FEATURE,
    payload: feature,
  }
}

export { 
  ADD_FEATURE,
  REMOVE_FEATURE,
  addFeature,
  removeFeature };