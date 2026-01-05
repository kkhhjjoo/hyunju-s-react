import { useState, type KeyboardEvent } from "react";

interface TodoInputProps {
  addItem: (title: string) => void;
}

function TodoInput({ addItem }: TodoInputProps) {
   // 렌더링 시점을 확인하기 위한 로그 (개발/디버깅 용도)
  console.log('\t\tTodoInput 렌더링');

  const [title, setTitle] = useState('');
  //입력창의 현재 텍스트를 저장하는 컴포넌트 자체의 state
  //사용자가 타이핑할때마다 이 state가 업데이트 됩니다.
  // 초기값은 빈 문자열('')

  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    if(title.trim() !== ''){ //공백 제거 후 빈 문자열이 아니면
      addItem(title); //부모의 addItem 함수 호출
      setTitle(''); // 입력창 초기화(다음 입력 준비)
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (event: KeyboardEvent) => {
    // isComposing: 한글, 일본어 등 조합 문자를 입력 중인지 확인
    // 예: "안녕" 입력 시 "ㅇ" → "아" → "안" 과정에서 엔터가 눌리는 것을 방지
    if (event.nativeEvent.isComposing) return; // 글자가 완성되지 않았을 경우 무시한다.(Mac 사용자)
    
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      <input type="text" autoFocus value={title}  // 페이지 로드 시 자동 포커스
        onChange={(e) => setTitle(e.target.value)} //제어 컴포넌트 : state 값 표시
        onKeyDown={handleAddKeydown} //입력할 떄마다 state 업데이트
      />  
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput;