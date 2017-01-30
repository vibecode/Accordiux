import { combineReducers } from 'redux';
import SectionsReducer from './SectionsReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  sections: SectionsReducer,
  selectedSectionId : SelectionReducer
});
