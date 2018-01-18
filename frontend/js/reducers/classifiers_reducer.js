import { RECEIVE_CLASSIFIER } from '../actions/classifier_actions';
import merge from 'lodash/merge';

const classifiersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CLASSIFIER:
            const newClassifier = action.classifier;
            return merge({}, state, newClassifier);
        default:
            return state;
    }
};

export default classifiersReducer;