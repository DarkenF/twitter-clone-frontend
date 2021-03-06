import {LoadingState, TweetsState} from "./ducks/tweets/contracts/state";
import {RootState} from "./store";
import {createSelector} from "reselect";

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);
