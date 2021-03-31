import {call, put, takeLatest} from "redux-saga/effects";
import {setTweets, setTweetsLoadingState, TweetsActionType} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, TweetsState} from "./contracts/state";
// TODO
// 1. Нужно доделать axios запросы для воркера 2.16
export function* fetchTweetsWorker() {
  try{
    const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  }catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsWorker);
}

