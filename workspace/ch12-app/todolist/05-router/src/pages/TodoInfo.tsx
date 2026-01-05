import type { Todo } from '@/types/todo';
import { Link, Outlet, useLocation, useMatch, useParams } from 'react-router';

// 임시 데이터 - API 연동 전까지 사용할 더미 데이터
const dummyData: Todo = {
  _id: 5,
  title: '임시 데이터',
  content: '임시 데이터 입니다.',
  done: true,
  createdAt: '2026.12.12 12:23:45',
  updatedAt: '2026.12.12 13:45:12'
};

function TodoInfo() {

  //path가 '/list/:id'로 지정했고 실제 URL이 '/list/3'일 때 useParams()는 {_id: '3'}을 반환
  const { _id } = useParams();
  // console.log(location.pathname.split('/list/').pop());

  //현재의 URL이 지정한 패턴의 URL과 일치하면 PathMatch 객체를, 일치하지 않으면 null을 반환
  const infoMatch = useMatch('/todolist/list/:_id'); //동적 세그먼트 지정 가능

  const data = dummyData;

  // if (Math.random() > 0.5) {
  //   throw new Error('테스트를 위해 직접 추가한 에러');
  // }

  //요청된 URL 저옵를 담고 있는 location 객체 변환
  const location = useLocation();

  

  return (
     <div id="main">
      <h2>할일 상세 보기</h2>
      <p>{ location.state?.message}</p>
      <div className="todo">
        <div>id: { _id }</div>
        <div>제목 : { data.title }</div>
        <div>내용 : { data.content }</div>
        <div>상태 : { data.done ? '완료' : '미완료' }</div>
        <div>작성일 : { data.createdAt }</div>
        <div>수정일 : {data.updatedAt}</div>
        {infoMatch && <>
          <Link to={`/todolist/list/${_id}/todoedit`}>수정</Link>
          <Link to={`/todolist/todolist`}>목록</Link>
        </>}
      </div>
      {/*중첩된 라우트의 컴포넌트를 표시하고 할일 정보를 전달*/}
      <Outlet context={{ item: data }} />
    </div>
  );
}

export default TodoInfo;