import TodoItem, { type TodoItem as TodoItemType } from "@pages/TodoItem";

//컴포넌트 이름과 타입이름이 똑같아서 충돌하므로 이름을 바꿔준다
interface TodoListProps {
  itemList: TodoItemType[];           // 할일 목록 배열
  toggleDone: (_id: number) => void;  // 완료/미완료 토글 함수
  deleteItem: (_id: number) => void;  // 할일 삭제 함수
}
//부모(Todo)로부터 할일 배열과 함수들을 props로 받습니다.
function TodoList({ itemList, toggleDone, deleteItem }: TodoListProps){
  console.log('\t\tTodoList 렌더링', itemList);
  const list = itemList.map((item) => {
    return <TodoItem
      key={item._id} //React가 각 항목을 구별하기 위한 고유 key
      item={item} //개별 할일 데이터를 자식 컴포넌트에 전달
      toggleDone={toggleDone} //완료 토글 함수를 자식에게 전달
      deleteItem={deleteItem} // 삭제 함수를 자식에게 전달
    />;
  });
  return (
    // 변환된 TodoItem 컴포넌트들을 <ul> 태그로 감싸서 반환
    <ul className="todolist">
      { list }  {/* 생성된 TodoItem 컴포넌트 배열을 렌더링 */}
    </ul>
  );
}

export default TodoList;