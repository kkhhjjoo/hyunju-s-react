// TODO 1. Slice 생성(ActionCreator, Reducer 생성)

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // ActionCreator, Reducer를 정의
  name: 'myCounter', // 슬라이스 이름(액션 타입의 접두사로 사용됨)
  initialState: { count: 5 }, // 초기 상태값
  reducers: {},
});

export default counterSlice;
