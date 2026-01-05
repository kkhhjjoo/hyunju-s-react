// 할일 항목의 데이터 구조를 정의하는 인터페이스
// export로 내보내서 다른 파일(Todo.tsx, TodoList.tsx)에서도 사용 가능
export interface TodoItem {
  _id: number;      // 할일의 고유 식별자
  title: string;    // 할일 제목
  done: boolean;    // 완료 여부 (true: 완료, false: 미완료)
}

interface TodoItemProps {
  item: TodoItem; //표시할 할일 데이터
  toggleDone: (_id: number) => void; //완료 상태를 토글하는 함수
  deleteItem: (_id: number) => void; //항목을 삭제하는 함수
}

function TodoItem({ item, toggleDone, deleteItem }: TodoItemProps){
  console.log('\t\t\t\tTodoItem 렌더링', item);
  return (
    <li>
      {/* 할일의 ID를 표시 */}
      <span>{item._id}</span>
      
      {/* 할일 제목 표시 영역 */}
      {/* 클릭하면 완료/미완료 상태가 토글됩니다 */}
      {/* 화살표 함수로 감싸서 클릭 시점에만 toggleDone이 실행되도록 함 */}
      <span onClick={() => toggleDone(item._id)}>
        {/* 삼항 연산자: done이 true면 취소선(<s>)으로 표시, false면 일반 텍스트 */}
        {item.done ? <s>{item.title}</s> : item.title}
      </span>

      {/* 삭제 버튼 */}
      {/* 클릭하면 해당 할일이 삭제됩니다 */}
      {/* 화살표 함수로 감싸서 클릭 시점에만 deleteItem이 실행되도록 함 */}
      <button type="button" onClick={ () => deleteItem(item._id) }>삭제</button>
    </li>
  );
}

// 다른 파일에서 import할 수 있도록 컴포넌트를 기본(default) 내보내기
export default TodoItem;