
// function* addNewsRecordSaga(action) {
//     try {
//       const newsList = yield select((state) => state.news.newsList);
//       const totalPages = yield select((state) => state.news.totalPages);
  
//       yield call(fetchAddNews, action.id);
//       if (newsList.length === 3) {
//         yield put(setCurrentPage(totalPages + 1));
//       }
//       yield put(addNewsRecordSuccess(action.id));
//       yield put(getNewsRecordRequest(action.id));
//     } catch (error) {
//       yield put(addNewsRecordError());
//     }
//   }