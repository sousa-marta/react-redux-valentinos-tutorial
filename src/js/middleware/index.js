import { ADD_ARTICLE } from '../constants/action-types';

const forbbidenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            // do your stuff
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbbidenWords.filter(word =>
                    action.payload.title.includes(word)
                );

                if( foundWord.length){
                    return dispatch({ type: "FOUND_BAD_WORD"})
                }
            }
            return next(action);
        }
    }
}