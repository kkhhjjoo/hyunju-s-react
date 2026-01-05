
import TodoInput from "@pages/TodoInput";
import type { TodoItem } from "@pages/TodoItem";
import TodoList from "@pages/TodoList";
import { useState } from "react";

function Todo(){
  console.log('\tTodo 렌더링');

  // 샘플 목록
  const initItemList: TodoItem[] = [
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ];

  // 할일 목록을 관리하는 state
  // itemList: 현재 할일 목록 배열
  // setItemList: itemList를 업데이트하는 함수
  // state가 변경되면 컴포넌트가 자동으로 리렌더링됩니다.
  const [itemList, setItemList] = useState(initItemList);

  // 할일 추가
  const addItem = (title: string) => {
    const item: TodoItem = { _id: itemList[itemList.length-1]?._id + 1 || 1, title, done: false };
    setItemList([...itemList, item]);
    //기존 배열을 복사하고 새 항목을 추가
    //setItemList로 state 업데이트
  }

  // 완료/미완료 처리
  const toggleDone = (_id: number) => {
    const newItemList = itemList.map(item => item._id === _id ? { ...item, done: !item.done } : item);
    //map으로 배열을 순회하면서 해당 ID의 항목만 done값을 반대로 변경
    setItemList(newItemList);
  }

  // 할일 삭제
  const deleteItem = (_id: number) => {
    const newItemList = itemList.filter(item => item._id !== _id);
    // filter로 해당 ID가 아닌 항목들만 남김
    // 결과적으로 해당 ID의 항목이 삭제된 새 배열 생성
    setItemList(newItemList);
    // 새로 생성된 배열로 state 업데이트
  }

  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>할일 목록</h2>
            <TodoInput addItem={ addItem } />
            <TodoList itemList={ itemList } toggleDone={ toggleDone } deleteItem={ deleteItem } />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;